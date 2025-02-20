<script setup lang="ts">
import Testimonial from '../components/Testimonial.vue';

const testimonials = [
    {
        text: 'The best surfboard I have ever used! Super safe and great performance.',
        name: 'Alex Johnson',
        location: 'California, USA',
        image: '/images/testimonials/p2.jpg',
    },
    {
        text: 'I love my One Euphoria board! It gives me confidence while surfing.',
        name: 'Maria Lopez',
        location: 'Sydney, Australia',
        image: '/images/testimonials/p1.jpg',
    },
];
</script>

<template>
    <div class="relative min-h-screen flex items-center justify-center">
        <div
            :style="{
                backgroundImage: 'url(/images/hero.jpg)',
                backgroundAttachment: 'fixed',
            }"
            class="absolute inset-0 bg-cover bg-center"
        ></div>
        <div class="relative z-10 text-center text-white">
            <h1 class="text-5xl font-bold">Ride the Best Waves</h1>
            <p class="mt-4 text-lg">
                Experience premium surfboards with ultimate safety.
            </p>
            <router-link to="/products">
                <button class="mt-6 px-6 py-3 bg-black text-white rounded-lg">
                    Shop Now
                </button>
            </router-link>
        </div>
    </div>
    <section class="py-12 bg-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-2xl font-bold mb-6">What Our Customers Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Testimonial
                    v-for="(item, index) in testimonials"
                    :key="index"
                    :testimonial="item"
                />
            </div>
        </div>
    </section>
</template>
