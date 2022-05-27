<template>
    <v-app>
        <router-link to="/login">Go to Login</router-link>
        <router-link to="/register">Go to Register</router-link>
        <router-view></router-view>
    </v-app>
</template>

<script>
export default {
    name: 'App',

    components: {},

    data: () => ({
        //
    }),
};
</script>
