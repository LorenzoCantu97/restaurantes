<template>
    <img src="../assets/logo.png" class="logoEnter" />
    <h1>Welcome Back! </h1>
    <div class="login">
        <input type="text" v-model="user" placeholder="Enter your name or email...">
        <input type="password" v-model="pwd" placeholder="Enter password...">
        <button @click="login()">Login</button>
    </div>
    <h5 class="suggestion">You are not registered?</h5>
    <button class="btnRegister" @click="register">Register</button>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LogIn',
    data() {
        return {
            user: '',
            pwd: '',
        }
    },
    mounted() {
        let userInfo = localStorage.getItem('userInfo');
        if (userInfo) { this.$router.push({ name: 'HomePage' }) }
    },
    methods: {
        async login() {
            let validate = this.validate();
            if(!validate) return false;

            let results = await axios.get(`http://localhost:3000/users?user=${this.user}&pwd=${this.pwd}`);

            if(results.data.data.message == 'error') { 
                alert(results.data.data.description);
                return false;
            } else {
                alert(results.data.data.description);
                localStorage.setItem('userInfo', JSON.stringify(results.data.data.data));
                this.$router.push({ name: 'HomePage' });
            }
        },
        register() {
            this.$router.push({ name: 'SignUp' });
        },
        validate() {
            if (this.user == "") {
                alert('The user or email received is invalid');
                return false;
            }
            if (this.pwd == "") {
                alert('Password empty');
                return false;
            }
            return true;
        }
    }
}
</script>