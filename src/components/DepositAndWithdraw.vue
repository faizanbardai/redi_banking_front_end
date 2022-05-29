<template>
    <v-card
        elevation="2"
        class="mb-2"
        :color="bankAccount.type === 'current' ? 'light-blue lighten-5' : 'teal lighten-5'"
    >
        <v-card-title>
            {{ bankAccount.name }}
        </v-card-title>

        <v-card-text class="text-right">
            <v-btn rounded @click="show = !show"> Balance: €{{ bankAccount.balance }} </v-btn>
        </v-card-text>

        <v-expand-transition>
            <div v-if="show">
                <v-divider></v-divider>

                <v-card-text>
                    <v-form v-model="valid">
                        <v-radio-group v-model="action" row mandatory>
                            <v-radio
                                v-for="action in actions"
                                :key="action.value"
                                :label="action.text"
                                :value="action.value"
                                :color="action.color"
                            ></v-radio>
                        </v-radio-group>
                        <v-text-field
                            type="number"
                            v-model="amount"
                            :rules="amountRules"
                            label="Amount"
                            required
                        ></v-text-field>
                    </v-form>
                    {{ bankAccount.number }}
                    <v-alert v-if="error" dense type="error" dismissible> {{ error }} </v-alert>
                    <v-alert v-if="message" dense type="info" dismissible> {{ message }} </v-alert>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="secondary" @click="show = !show"> Close </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="submit(amount)" :disabled="!valid"> Submit </v-btn>
                </v-card-actions>
            </div>
        </v-expand-transition>
    </v-card>
</template>
<script>
import { deposit, withdraw } from '@/services/customer';

export default {
    props: {
        bankAccount: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            show: false,
            valid: false,
            action: 'deposit',
            actions: [
                { text: 'Deposit', value: 'deposit', color: 'primary' },
                { text: 'Withdraw', value: 'withdraw', color: 'secondary' },
            ],
            amount: null,
            amountRules: [(v) => !!v || 'Amount is required'],
            error: '',
            message: '',
        };
    },
    methods: {
        submit() {
            const token = localStorage.getItem('token');
            const { name, type, number } = this.bankAccount;

            if (this.action === 'deposit') {
                deposit(token, { amount: this.amount, name, type, number })
                    .then((res) => {
                        const { bankAccount, message } = res.data;
                        this.message = message;
                        this.$emit('bankAccountUpdated', bankAccount);
                    })
                    .catch((error) => (this.error = error.response.data.message));
            } else {
                withdraw(token, { amount: this.amount, name, type, number })
                    .then((res) => {
                        const { bankAccount, message } = res.data;
                        this.message = message;
                        this.$emit('bankAccountUpdated', bankAccount);
                    })
                    .catch((error) => (this.error = error.response.data.message));
            }
        },
    },
};
</script>
<style></style>
