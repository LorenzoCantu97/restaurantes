<template>
   <img src="../assets/logo.png" class="logo"/>
    <h1>Welcome Back! </h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter your e-mail...">
        <input type="password" v-model="pwd" placeholder="Enter password...">
        <button @click="login()">LogIn</button>
    </div>
</template>

<script>
    export default {
        name: 'LogIn',
        data(){
            return {
                name: '',
                email: '',
                pwd: '',
            }
        },
        methods: {
            login(){
                console.log('login')
            }
        }
    }
</script>