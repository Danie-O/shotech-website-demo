<script setup></script>

<template>
    <div class="relative">
        <div class="mt-[15%] text-center justify-center items-center p-16">
            <p class="text-5xl text-title-text-color">Oops! The page you tried to access cannot be found!</p>
            <button @click="$router.back()" class="p-6 mt-8 bg-primary-color text-2xl font-medium text-white cursor-pointer">Go Back</button>
        </div>
    </div>
</template>