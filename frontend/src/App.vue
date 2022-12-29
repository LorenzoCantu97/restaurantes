<template>
  <router-view />
</template>

<script>
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
}

.logoEnter {
  width: 340px;
  margin-top: 58px;
}

.register input,
.login input,
.addForm input,
.updateForm input {
  width: 300px;
  height: 40px;
  padding: 9px;
  display: block;
  margin-top: 20px;
  margin-bottom: 25px;
  margin-right: auto;
  margin-left: auto;
  border: 0px;
  border-bottom: 1px solid skyblue;
}

.addForm,
.updateForm {
  margin-top: 30px;
}

h1 {
  margin-top: 15px;
}

.register input:hover,
.login input:hover,
.addForm input:hover,
.updateForm input:hover {
  padding-bottom: 7px;
  border-bottom: 3px solid rgb(96, 189, 226);
}

.register input:focus,
.login input:focus,
.addForm input:focus,
.updateForm input:focus {
  outline: none;
  padding-bottom: 7px;
  border-bottom: 3px solid rgb(96, 189, 226);
}

.register button,
.login button,
.addForm button {
  width: 318px;
  height: 35px;
  color: white;
  font-weight: bold;
  border-radius: 11px;
  border: 2px solid rgb(83, 168, 201);
  background-color: rgb(83, 168, 201);
  cursor: pointer
}

.register button:hover,
.login button:hover,
.addForm button:hover,
.updateForm button:hover {
  color: black;
}

.updateForm button {
  width: 160px;
  height: 35px;
  color: white;
  margin-right: 10px;
  font-weight: bold;
  border-radius: 11px;
  border: 2px solid rgb(83, 168, 201);
  background-color: rgb(83, 168, 201);
  cursor: pointer
}

.updateForm .btnDelete {
  background-color: rgba(255, 0, 0, 0.788);
  border: 2px solid rgba(255, 0, 0, 0.788);
}

.btnRegister {
  width: 130px;
  height: 35px;
  color: white;
  font-weight: bold;
  margin-top: 14px;
  border-radius: 11px;
  border: 2px solid rgb(83, 168, 201);
  background-color: rgb(83, 168, 201);
  cursor: pointer;
}

.btnRegister:hover {
  color: black;
}

.suggestion {
  display: inline-block;
  margin-right: 20px;
}
</style>
