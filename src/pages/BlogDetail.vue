<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import blogData from '../data/blog.json';

const route = useRoute();
const post = ref(null);

onMounted(() => {
    post.value = blogData.find((b) => b.id === parseInt(route.params.id));
});
</script>

<template>
    <div class="p-8 bg-gray-100 min-h-screen" v-if="post">
        <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-64 object-cover rounded-md"
            />
            <h1 class="text-3xl font-bold mt-4">{{ post.title }}</h1>
            <p class="text-gray-600 mt-2">{{ post.content }}</p>
        </div>
    </div>
</template>
