<template>
    <div>Welcome {{ $store.state.user.firstName }} {{ $store.state.user.lastName }}</div>
</template>
<script>
export default {
    data() {
        return {
            user: {},
        };
    },
};
</script>
<style></style>
