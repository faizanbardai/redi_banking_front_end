<template>
    <v-app>
        <router-link to="/login">Go to Login</router-link>
        <router-link to="/register">Go to Register</router-link>
        <router-view></router-view>
    </v-app>
</template>

<script>
import { getCustomerByToken } from './services/customer';

export default {
    name: 'App',

    components: {},

    data: () => ({
        //
    }),

    mounted() {
        const token = localStorage.getItem('token');
        if (token) {
            getCustomerByToken(token)
                .then((res) => {
                    const { customer } = res.data;
                    this.$store.commit('setUser', customer);
                    this.$router.push('/dashboard');
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    this.$router.push('/login');
                });
        } else {
            this.$router.push('/login');
        }
    },
};
</script>
