<template>
    <v-app>
        <div class="pb-16"><router-view></router-view></div>
        <v-footer fixed>&copy; 2022 - just kidding... feel free to copy!</v-footer>
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
                    if (this.$route.name !== 'home') this.$router.push('/');
                });
        } else {
            if (this.$route.name !== 'home') this.$router.push('/');
        }
    },
};
</script>
