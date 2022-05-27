<template>
    <div>Welcome {{ store.user.firstName }} {{ store.user.lastName }}</div>
</template>
<script>
import { store } from '../store';
export default {
    data() {
        return {
            user: {},
            store,
        };
    },
};
</script>
<style></style>
