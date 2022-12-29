<template>
    <img src="../assets/logo.png" class="logoEnter" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter your name...">
        <input type="text" v-model="email" placeholder="Enter your E-Mail...">
        <input type="password" v-model="pwd" placeholder="Enter password...">
        <button @click="signUp()">Sign Up</button>
    </div>
    <h5 class="suggestion">Already registered?</h5>
    <button class="btnRegister" @click="login">Sign in</button>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            pwd: '',
        }
    },
    mounted() {
        let userInfo = localStorage.getItem('user_info');
        if (userInfo) { this.$router.push({ name: 'HomePage' }) }
    },
    methods: {
        login(){
            this.$router.push({ name: 'Login' });
        },
        async signUp() {
            const validate = this.validate();
            if (!validate) return false;

            const userInfo = {
                name: this.name,
                email: this.email,
                pwd: this.pwd
            };

            let results = await axios.post('http://localhost:3000/users', userInfo);

            if (results.data.data.message == 'error') {
                alert(results.data.data.description);
                return false;
            } else {
                alert(results.data.data.description);
                localStorage.setItem('userInfo', JSON.stringify(results.data.data.data));
                this.$router.push({ name: 'HomePage' });
            }
        },
        validate() {
            const match = this.email.match(/\S+@\S+\.\S+/);
            if (!match) {
                alert('email invalido');
                return false;
            }
            if (this.name == "" || this.pwd == "") {
                alert('Nombre y/o Contraseña invalido');
                return false;
            }
            return true;
        }
    },
}
</script>

<style>
</style>