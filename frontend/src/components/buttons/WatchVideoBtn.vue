<script setup>
  const props = defineProps({
    videoLink: {
      type: String,
      default: "https://www.youtube.com/channel/UC-pZDK_WWjoxGvi_TVSXWWw"
    }
  })
</script>


<template>
    <div class="hidden sm:inline-flex relative ml-0 p-2 gap-3 rounded-2xl justify-start align-middle items-center hover:underline cursor-pointer">
        <button class="w-12 h-12 relative" type="button">
          <div class="w-12 h-12 left-0 top-0 absolute rounded-full border border-title-text-color"></div>
          <div class="w-6 h-6 left-[12px] top-[12px] absolute"><img src="../../assets/home/Play.svg" alt=""></div>
        </button>
        <a :href="videoLink" class="text-title-text-color text-lg font-normal">Watch Video</a>
    </div>
</template>