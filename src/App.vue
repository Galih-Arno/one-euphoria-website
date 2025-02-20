<script setup lang="ts">
import Navbar from './components/Navbar.vue';

</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
    <Navbar/>
    <transition name="fade" mode="out-in">
      <Suspense>
        <router-view/>
      </Suspense>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>