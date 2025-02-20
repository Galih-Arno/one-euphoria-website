<script setup>
import { ref, onMounted } from 'vue';
import blogData from '../data/blog.json';

const blogPosts = ref([]);

onMounted(() => {
    blogPosts.value = blogData;
});
</script>

<template>
    <div class="p-8 bg-gray-100 min-h-screen">
        <h1 class="text-3xl font-bold text-center">Surfing Tips & News</h1>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                v-for="post in blogPosts"
                :key="post.id"
                class="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
            >
                <img
                    :src="post.image"
                    :alt="post.title"
                    loading="lazy"
                    class="w-full h-48 object-cover rounded-md"
                />
                <h2 class="text-xl font-semibold mt-4">{{ post.title }}</h2>
                <p class="text-gray-600 mt-2">{{ post.excerpt }}</p>
                <router-link :to="`/blog/${post.id}`">
                    <button
                        class="mt-4 px-4 py-2 bg-primary text-black rounded-lg hover:bg-gray-800"
                    >
                        Read More
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>
