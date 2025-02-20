<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(localStorage.getItem('theme') === 'dark');

const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};

onMounted(() => {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
    }
});
</script>

<template>
    <nav class="p-4 flex justify-between bg-white dark:bg-black dark:text-white">
        <router-link to="/" class="font-bold text-2xl">One Euphoria</router-link>
        <button @click="toggleDarkMode" class="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded">
            {{ isDark ? "Light Mode" : "Dark Mode" }}
        </button>
        <div class="space-x-4">
            <router-link to="/information">Information</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/blog">Blog</router-link>
        </div>
    </nav>
</template>
