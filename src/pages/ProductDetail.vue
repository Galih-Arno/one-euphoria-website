<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import productsData from "../data/products.json"

const route = useRoute()
const product = ref(null)

onMounted(() => {
    product.value = productsData.find((p) => p.id === parseInt(route.params.id))
})
</script>

<template>
    <div class="p-8 bg-gray-100 min-h-screen" v-if="product">
        <div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover rounded-md">
            <h1 class="text-3xl font-bold mt-4">{{ product.name }}</h1>
            <p class="text-gray-600 mt-2">{{ product.description }}</p>
            <p class="text-lg font-bold mt-2">${{ product.price }}</p>
            <button class="mt-6 px-6 py-3 bg-primary text-black font-semibold rounded-lg">
                Buy Now
            </button>
        </div>
    </div>
</template>