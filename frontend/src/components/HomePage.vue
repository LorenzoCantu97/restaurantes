<template>
    <h1>Hello User, Welcome to Home</h1>
</template>

<script>
    export default {
        name: 'HomePage',
        mounted() {
            let userInfo = localStorage.getItem('user_info');
            if(!userInfo) { this.$router.push({name: 'SignUp'}) } 
        }
    }
</script>