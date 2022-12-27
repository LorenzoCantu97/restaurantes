<template>
  
  <router-view/>
</template>

<script>
/*
import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    SignUp,
    HomePage
}
}
*/
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .logo {
        width: 340px;
  }
  .register, .login input {
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
  .register, .login input:hover{
      padding-bottom: 7px;
      border-bottom: 3px solid rgb(96, 189, 226);
  }
  .register, .login input:focus {
      outline: none;
      padding-bottom: 7px;
      border-bottom: 3px solid rgb(96, 189, 226);
  }
  .register, .login button {
      width: 318px;
      height: 35px;
      color: white;
      font-weight: bold;
      border-radius: 11px;
      border: 2px solid skyblue;
      background-color: skyblue;
      cursor: pointer;
  }
  .register, .login button:hover {
      color: black;
      border: 3px solid rgb(54, 168, 212);
  }
</style>
