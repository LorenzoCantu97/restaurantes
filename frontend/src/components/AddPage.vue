<template>
    <Header />
    <h1>Hello {{this.userInfo.name}}, Welcome to Add Page</h1>
    <div class="addForm">
        <h2>Please enter the restaurant information</h2>
        <input id="inputName" type="text" placeholder="Restaurant name" v-model="restaurant.name">
        <input type="text" placeholder="Restaurant address" v-model="restaurant.address">
        <input type="number" placeholder="Restaurant phone" v-model="restaurant.phone">
        <button @click="addRestaurant">Add Restaurant</button>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'AddPage',
    components: {Header},
    data() {
        return{
            userInfo: {},
            restaurant: {}
        }
    },
    mounted() {
        let userInfo = localStorage.getItem('userInfo');
        if (!userInfo) { this.$router.push({ name: 'Login' }) }
        else { this.userInfo = JSON.parse(userInfo) }
    },
    methods: {
        async addRestaurant(){
            this.restaurant.user = this.userInfo.name;
            let results = await axios.post('http://localhost:3000/restaurants', this.restaurant);
            
            if(results){
                this.restaurant = {
                    name: null,
                    address: null,
                    phone: null
                };
                alert(results.data.data.description);
                document.getElementById('inputName').focus();
            } else {
                alert ('An error ocurred, please consult');
            }
        }
    }
}
</script>

<style>
    .addForm input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>