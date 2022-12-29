<template>
    <select v-model="restaurantToUpdate" class="restaurantDropdown" @change="selectRestaurant" required>
        <option disabled selected>Select the restaurant</option>
        <option v-for="item in restaurants" :key="item.id" :value="item.nombre"> {{ item.nombre }}</option>
    </select>
</template>

<script>
export default {
    name: 'dropdownComponent',
    props: {
        restaurants: null
    },
    data() {
         return {
            restaurantToUpdate: null
         }
    },
    methods: {
        selectRestaurant(){
            this.$emit('restaurantReceived', this.restaurantToUpdate);
        }
    }
}
</script>

<style>
    .restaurantDropdown {
        width: 400px;
        height: 40px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        background: #dcdbdd;
        font-size: 17px;
        text-align: center;
        margin-top: 8px;
    }

    .restaurantDropdown:hover {
        cursor: pointer;
    }
</style>