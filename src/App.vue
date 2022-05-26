<template>
    <v-app>
        <RegisterUser></RegisterUser>
    </v-app>
</template>

<script>
import RegisterUser from './views/RegisterUser.vue';
export default {
    name: 'App',

    components: { RegisterUser },

    data: () => ({
        //
    }),
};
</script>
