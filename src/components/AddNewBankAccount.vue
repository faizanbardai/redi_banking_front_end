<template>
    <div class="mb-2">
        <v-expand-transition>
            <v-card v-if="!reveal" class="transition-fast-in-fast-out v-card--reveal" elevation="0">
                <v-card-actions class="text-right">
                    <v-btn rounded block @click="reveal = !reveal"> Add a new bank account </v-btn>
                </v-card-actions>
            </v-card>
        </v-expand-transition>

        <v-expand-transition>
            <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal">
                <v-card-title> New bank account </v-card-title>

                <v-card-text>
                    <v-form v-model="valid">
                        <v-radio-group v-model="type" row mandatory>
                            <v-radio
                                v-for="type in types"
                                :key="type.value"
                                :label="type.text"
                                :value="type.value"
                                :color="type.color"
                            ></v-radio>
                        </v-radio-group>
                        <v-text-field v-model="name" :rules="nameRules" label="Account Name" required></v-text-field>
                    </v-form>
                    <v-alert v-if="error" dense type="error" dismissible> {{ error }} </v-alert>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="secondary" @click="reveal = false"> Close </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="submit" :disabled="!valid"> Submit </v-btn>
                </v-card-actions>
            </v-card>
        </v-expand-transition>
    </div>
</template>
<script>
import { createBankAccount } from '@/services/customer';

export default {
    data() {
        return {
            reveal: false,
            valid: false,
            type: 'current',
            types: [
                { text: 'Current', value: 'current', color: 'primary' },
                { text: 'Savings', value: 'savings', color: 'secondary' },
            ],
            name: '',
            nameRules: [(v) => !!v || 'Account name is required'],
            error: '',
        };
    },
    methods: {
        submit() {
            const token = localStorage.getItem('token');

            createBankAccount(token, { type: this.type, name: this.name })
                .then((res) => {
                    const { bankAccount } = res.data;
                    this.$emit('bankAccountAdded', bankAccount);
                })
                .catch((err) => {
                    console.log(err);
                    this.error = err?.response?.data?.message;
                })
                .finally(() => {
                    this.reveal = false;
                });
        },
    },
};
</script>
<style></style>
