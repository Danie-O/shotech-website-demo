<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: "Placeholder Text"
        },
        textColor : {
            type: String,
            default: ''
        },
    })
</script>

<template>
    <div class="h-28 w-52 p-3 mt-2 rounded-3xl justify-center items-center grid grid-cols-[40%_60%] gap-x-0">
        <img src="../assets/donation/donate.png" alt="" class="w-12 h-12 ml-2 bg-transparent rounded-full">
        <p :class="textColor === '' ? 'text-white' : 'text-'+textColor" class="text-start text-xl font-medium tracking-tight">{{ title }} </p>
    </div>
</template>