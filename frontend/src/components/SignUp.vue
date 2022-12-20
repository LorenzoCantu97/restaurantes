<template>
    <img src="../assets/logo.png" class="logo"/>
    <h1>Sign Up Page</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter your name...">
        <input type="text" v-model="email" placeholder="Enter your E-Mail...">
        <input type="password" v-model="pwd" placeholder="Enter password...">
        <button @click="signUp()">Sign Up</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'SignUp',
        data(){
            return {
                name: '',
                email: '',
                pwd: '',
            }
        },
        methods: {
            async signUp(){
                const validacion = this.validate();
                if(!validacion) return false;

                const userInfo = {
                    nombre: this.name,
                    correo: this.email,
                    pwd: this.pwd
                };

                let results = await axios.post('http://localhost:3000/users', userInfo);
                
                //console.warn('RESULTS :')
                //console.log(results);

                if(results.data.data.message == 'error') {
                    alert(results.data.data.description);
                } else {
                    alert(results.data.data.description);
                    localStorage.setItem('user_info', JSON.stringify(userInfo));
                    this.$router.push({name: 'HomePage'});
                }
            },
            validate(){
                const match = this.email.match(/\S+@\S+\.\S+/);
                if(!match){
                    alert('email invalido');
                    return false;
                }
                if(this.name == "" || this.pwd == ""){
                    alert('Nombre y/o Contraseña invalido');
                    return false;
                }
                return true;
            }
        },
        mounted() {
            let userInfo = localStorage.getItem('user_info');
            if(userInfo) { this.$router.push({name: 'HomePage'}) } 
        }
    }
</script>

<style>
    
    .logo {
        width: 340px;
    }
    .register input {
        width: 300px;
        height: 40px;
        padding: 9px;
        display: block;
        margin-bottom: 25px;
        margin-right: auto;
        margin-left: auto;
        border: 0px;
        border-bottom: 1px solid skyblue;
    }
    .register input:hover{
        padding-bottom: 7px;
        border-bottom: 3px solid rgb(96, 189, 226);
    }
    .register input:focus {
        outline: none;
        padding-bottom: 7px;
        border-bottom: 3px solid rgb(96, 189, 226);
    }
    .register button {
        width: 318px;
        height: 35px;
        color: white;
        font-weight: bold;
        border-radius: 11px;
        border: 2px solid skyblue;
        background-color: skyblue;
        cursor: pointer;
    }
    .register button:hover {
        color: black;
        border: 3px solid rgb(54, 168, 212);
    }
</style>