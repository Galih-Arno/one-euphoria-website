<template>
    <div class="bg-gray-100 p-6 rounded-xl shadow-md">
        <p class="text-lg italic">"{{ testimonial.text }}"</p>
        <div class="mt-4 flex items-center">
            <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <p class="font-semibold">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-600">{{ testimonial.location }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    testimonial: Object,
});
</script>
