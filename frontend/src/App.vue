<template>
    <div id="app">
        <h1>Xotosphere</h1>
        <div v-for="(store) in stores" :key="store._id">
            <h2>{{store.name}}</h2>
            <template v-if="store.products && store.products.length > 0">
                <p>Products:</p>
                <ul>
                    <li v-for="(product) in store.products" :key="product._id">
                        <h4>{{product.title}}</h4>
                        <p>{{product.description}}</p>
                        <p>{{product.price}}€</p>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    data() {
        return {
            stores: [],
        };
    },
    async created() {
        const { data } = await axios.get("http://localhost:5000/api/stores");
        this.stores = data.data;
    },
};
</script>
