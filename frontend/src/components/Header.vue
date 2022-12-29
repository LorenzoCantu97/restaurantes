<template>
    <div class="headerMenu">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <router-link to="/update">Update Restaurant</router-link>
        <a href="/" @click="logOut">Log Out</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    methods: {
        logOut() {
            localStorage.removeItem('userInfo');
        }
    }
}
</script>

<style>
.headerMenu {
    width: auto;
    height: 45px;
    background-color: rgb(83, 168, 201);
    display: flex;
    align-items: center;
}

.headerMenu a {
    float: left;
    color: white;
    margin-left: 20px;
    text-decoration: none;
}

.headerMenu a:hover {
    color: black;
}
</style>