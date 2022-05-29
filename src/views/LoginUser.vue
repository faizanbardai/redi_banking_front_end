<template>
    <v-form v-model="valid">
        <v-container>
            <v-card :loading="loading" elevation="0">
                <v-card-text class="py-0">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    <v-text-field
                        type="password"
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        required
                    ></v-text-field>
                    <v-alert v-if="error" dense type="error" dismissible> {{ error }} </v-alert>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!valid" color="success" class="float-left" @click="submit"> Login </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-form>
</template>
<script>
import { loginCustomer } from '@/services/customer';

export default {
    data() {
        return {
            valid: false,
            error: '',
            loading: false,
            email: '',
            emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+/.test(v) || 'E-mail must be valid'],
            password: '',
            passwordRules: [(v) => !!v || 'Password is required'],
        };
    },
    methods: {
        submit() {
            const customerData = {
                email: this.email,
                password: this.password,
            };

            this.loading = true;

            loginCustomer(customerData)
                .then((res) => {
                    const { customer, token } = res.data;
                    localStorage.setItem('token', token);
                    this.$store.commit('setUser', customer);
                    this.$router.push('/dashboard');
                })
                .catch((error) => {
                    this.error = error.response.data.message;
                })
                .finally(() => (this.loading = false));
        },
    },
};
</script>
<style></style>
