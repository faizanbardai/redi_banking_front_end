<template>
    <v-form v-model="valid">
        <v-container>
            <v-card :loading="loading" elevation="0">
                <v-card-text class="py-0">
                    <v-text-field
                        v-model="firstName"
                        :rules="firstNameRules"
                        label="First name"
                        required
                    ></v-text-field>
                    <v-text-field v-model="lastName" :rules="lastNameRules" label="Last name" required></v-text-field>
                    <v-text-field v-model="address" :rules="addressRules" label="Address" required></v-text-field>
                    <v-text-field v-model="phone" :rules="phoneRules" label="Phone" required></v-text-field>
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
                    <v-btn :disabled="!valid" color="success" class="float-left" @click="submit">
                        Create Account
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-form>
</template>
<script>
import { registerCustomer } from '../services/customer';

export default {
    data() {
        return {
            valid: false,
            error: '',
            loading: false,
            firstName: '',
            firstNameRules: [(v) => !!v || 'Name is required'],
            lastName: '',
            lastNameRules: [(v) => !!v || 'Name is required'],
            email: '',
            emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+/.test(v) || 'E-mail must be valid'],
            address: '',
            addressRules: [(v) => !!v || 'Address is required'],
            phone: '',
            phoneRules: [(v) => !!v || 'Phone is required'],
            password: '',
            passwordRules: [(v) => !!v || 'Password is required'],
        };
    },
    methods: {
        submit() {
            const customerData = {
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                address: this.address,
                phone: this.phone,
                password: this.password,
            };

            this.loading = true;

            registerCustomer(customerData)
                .then((res) => {
                    const { token, customer } = res.data;
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
