<template>
    <div>
        <LoginAdmin v-if="!showDashboard" @setShowDashboard="setShowDashboard"></LoginAdmin>
        <v-container v-else>
            <v-card>
                <v-card-title>Customers</v-card-title>
                <v-data-table dense :headers="headers" :search="search" :items="customers">
                    <template v-slot:top>
                        <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
                    </template>
                </v-data-table>
                <v-card-text> </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>
<script>
import LoginAdmin from '@/components/LoginAdmin.vue';
export default {
    components: { LoginAdmin },
    data() {
        return {
            showDashboard: false,
            customers: [],
            search: '',
            headers: [
                { text: 'First name', value: 'firstName' },
                { text: 'Last name', value: 'lastName' },
                { text: 'Email', value: 'email' },
                { text: 'Phone', value: 'phone' },
                { text: 'Address', value: 'address' },
            ],
        };
    },
    methods: {
        setShowDashboard(customers) {
            this.showDashboard = true;
            this.customers = customers;
        },
    },
};
</script>
<style></style>
