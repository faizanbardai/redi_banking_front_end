<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script>
export default {
    data() {
        return {
            valid: false,
            name: '',
            nameRules: [(v) => !!v || 'Name is required'],
            email: '',
            emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+/.test(v) || 'E-mail must be valid'],
        };
    },
};
</script>
<style></style>
