<template>
    <Header />
    <h1>Hello {{this.userInfo.name}}, Welcome to Home Page</h1>
    <div class="restaurants" v-if="restaurants.length != 0">
        <table border="1">
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>ADDRESS</td>
                <td>PHONE</td>
            </tr>
            <tr v-for="restaurant in this.restaurants" :key="restaurant.id">
                <td>{{ restaurant.id }}</td>
                <td>{{ restaurant.nombre }}</td>
                <td>{{ restaurant.direccion }}</td>
                <td>{{ restaurant.telefono }}</td>
            </tr>
        </table>
    </div>
    <h3 v-else>The user has no registered any restaurants</h3>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'HomePage',
    components: {Header},
    data() {
        return{
            userInfo: {},
            restaurants: []
        }
    },
    async mounted() {
        let userInfo = localStorage.getItem('userInfo');
        if (!userInfo) { this.$router.push({ name: 'Login' }) }
        else { this.userInfo = JSON.parse(userInfo) }

        let restaurants = await axios.get(`http://localhost:3000/restaurants?user=${this.userInfo.name}`);
        if(restaurants) { this.restaurants = restaurants.data.data.data }
    },
}
</script>

<style>
    .restaurants table {
        margin-top: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .restaurants table td {
        padding: 5px;
    }
</style>