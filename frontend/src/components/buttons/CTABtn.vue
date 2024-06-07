<script setup>
    const props = defineProps({
        title : {
            type: String,
            default: "Button"
        },
        textColor : {
            type: String,
            default: ''
        },
        buttonType : {
            type: String,
            default: "button"
        }
    })
</script>

<template>
    <div class="w-44 md:h-14 h-20 p-2 bg-neutral-700 justify-center items-center gap-2 inline-flex">
        <button :class="textColor === '' ? 'text-white' : 'text-'+textColor" class="md:text-lg hover:text-white text-2xl font-medium cursor-pointer" :type="buttonType">{{ title }}</button>
    </div>
</template>