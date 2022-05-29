<template>
    <v-card elevation="0">
        <v-card-title>
            Welcome {{ $store.state.user.firstName }} {{ $store.state.user.lastName }}
            <v-spacer></v-spacer>
            <v-btn text rounded @click="logout"><v-icon>mdi-logout-variant</v-icon></v-btn>
        </v-card-title>
        <v-card-text class="text-center pb-0" v-if="balance">
            <v-chip color="primary"> Total balance: €{{ balance }} </v-chip>
        </v-card-text>

        <v-card-text>
            <AddNewBankAccount @bankAccountAdded="bankAccountAdded"></AddNewBankAccount>
            <DepositAndWithdraw
                v-for="bankAccount in bankAccounts"
                :key="bankAccount.number"
                :bankAccount="bankAccount"
                @bankAccountUpdated="bankAccountUpdated"
            ></DepositAndWithdraw>
        </v-card-text>
    </v-card>
</template>
<script>
import { getBankAccounts } from '@/services/customer';
import AddNewBankAccount from '@/components/AddNewBankAccount.vue';
import DepositAndWithdraw from '@/components/DepositAndWithdraw.vue';

export default {
    components: { AddNewBankAccount, DepositAndWithdraw },
    data() {
        return {
            bankAccounts: [],
        };
    },
    mounted() {
        const token = localStorage.getItem('token');
        getBankAccounts(token).then((res) => {
            const { bankAccounts } = res.data;
            this.bankAccounts = bankAccounts;
        });
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/');
        },
        bankAccountAdded(bankAccount) {
            this.bankAccounts.push(bankAccount);
        },
        bankAccountUpdated(bankAccount) {
            const index = this.bankAccounts.findIndex((b) => b.number === bankAccount.number);
            this.$set(this, 'bankAccounts', [
                ...this.bankAccounts.slice(0, index),
                bankAccount,
                ...this.bankAccounts.slice(index + 1),
            ]);
            this.bankAccounts.splice(index, 1, bankAccount);
        },
    },
    computed: {
        balance() {
            return this.bankAccounts.reduce((acc, curr) => acc + curr.balance, 0);
        },
    },
};
</script>
<style></style>
