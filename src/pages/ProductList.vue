<script setup>
import { ref, onMounted } from 'vue';
import productsData from '../data/products.json';

const products = ref([]);
const imageLoaded = ref(false);
onMounted(() => {
    products.value = productsData;
});
</script>

<template>
    <div class="p-8 bg-gray-100 min-h-screen">
        <h1 class="text-3xl font-bold text-center">Our Surfboards</h1>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                v-for="product in products"
                :key="product.id"
                class="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform hover:shadow-xl"
            >
                <img
                    :src="product.image"
                    :alt="product.name"
                    loading="lazy"
                    class="w-full h-48 object-cover rounded-md"
                    @load="imageLoaded=true"
                />
                <h2 class="text-xl font-semibold mt-4">{{ product.name }}</h2>
                <p class="text-gray-600">{{ product.description }}</p>
                <p class="text-lg font-bold mt-2">${{ product.price }}</p>
                <router-link :to="`/products/${product.id}`">
                    <button
                        class="mt-4 px-4 py-2 bg-primary text-black rounded-lg"
                    >
                        View Details
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>
