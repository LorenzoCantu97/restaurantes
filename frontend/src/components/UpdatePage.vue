<template>
    <Header></Header>
    <h1>Hello {{this.userInfo.name}}, Welcome to Update Page</h1>
    <div class="updateForm">
        <h2>Please select the restaurant to Update</h2>
        <restaurantDropdown :restaurants="restaurants" @restaurantReceived="restaurantReceived"/>
        <div v-show="restaurantSelected">
            <h2>Please enter the new information</h2>
            <input type="text" placeholder="Restaurant name" v-model="newRestaurant.name">
            <input type="text" placeholder="Restaurant address" v-model="newRestaurant.address">
            <input type="number" placeholder="Restaurant phone" v-model="newRestaurant.phone">
            <button @click="updateRestaurant">Update Restaurant</button>
            <button class="btnDelete" @click="deleteRestaurant">Delete Restaurant</button>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
import restaurantDropdown from './dropdownComponent.vue'
export default {
    name: 'UpdatePage',
    components: {Header, restaurantDropdown},
    data() {
        return{
            userInfo: {},
            restaurants: [],
            restaurantSelected: null,
            newRestaurant: {}
        }
    },
    async beforeMount() {
        let userInfo = localStorage.getItem('userInfo');
        if (!userInfo) { this.$router.push({ name: 'Login' }) }
        else { this.userInfo = JSON.parse(userInfo) }

        let restaurants = await axios.get(`http://localhost:3000/restaurants?user=${this.userInfo.name}`);
        if(restaurants) { 
            restaurants.data.data.data.forEach(element => {
                this.restaurants.push(element);
            });
        }
    },
    methods: {
        restaurantReceived(value) {
            this.restaurantSelected = value;
            this.restaurants.forEach(element => {
                if(element.nombre == value){
                    this.newRestaurant = {
                        id: element.id,
                        name: element.nombre,
                        address: element.direccion,
                        phone: element.telefono,
                        user: this.userInfo.name
                    }
                }
            });
        },
        async updateRestaurant() {
            let update = await axios.put('http://localhost:3000/restaurants', this.newRestaurant);

            if(update) {
                alert(update.data.data.description);
            } else {
                alert('Something has happen, please consult');
            }
        },
        async deleteRestaurant() {
            let deleted = await axios.delete(`http://localhost:3000/restaurants?id=${this.newRestaurant.id}`);
            
            if(deleted) {
                for(let i = 0; i < this.restaurants.length; i++) {
                    if(this.restaurants[i].nombre == this.newRestaurant.name){
                        this.restaurants.splice(i, 1);
                    }
                }
                this.newRestaurant = {
                    id: null,
                    name: null,
                    address: null,
                    phone: null,
                    user: null
                }
                this.restaurantSelected = null;
                alert(deleted.data.data.description);
            } else {
                alert('Something has happen, please consult');
            }        
        }
    }
}
</script>