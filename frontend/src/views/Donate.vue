<script setup>
    import CTABtn from '../components/buttons/CTABtn.vue';
    import WatchVideoBtn from '../components/buttons/WatchVideoBtn.vue';
    import TextPlaceholder from '../components/TextPlaceholder.vue';

    const redirect = () => {
        window.location.href = "https://donate.stripe.com/test_00g4i38lW3474PS8ww"
    };
</script>

<template>
    <div class="px-20 py-6 md:py-4 mt-auto w-full h-[80%] md:h-[90%]">
        <div class="w-[100%] gap-4 md:gap-y-3 md:h-auto mt-auto mb-auto relative">
            <section class="mt-[5%] lg:mt-auto">
                <p class="text-title-text-color text-5xl md:text-6xl lg:text-5xl font-extrabold text-center leading-20 mb-4">Great futures are built</p>
                <p class="text-title-text-color text-3xl md:text-4xl font-semibold text-center leading-20 mb-4">with a small charity</p>
                <p class="text-center text-sub-text-color text-sm md:text-lg font-normal leading-6 tracking-tight mb-3">Join us in building a brighter and better future for all, <br/>through technology </p>
                <div class="mt-10 md:mt-8 relative flex justify-center items-center">
                    <CTABtn @click="redirect()" title="Donate Now" textColor="black" class="bg-primary-color hover:bg-regular-text-color justify-center items-center"></CTABtn>
                    <WatchVideoBtn class="ml-6"></WatchVideoBtn>
                </div>
            </section>
            <section class="relative flex justify-center items-center">
                <div class="hidden lg:flex lg:flex-col">
                    <div class="right-facing-folder-outer mr-2 mt-[-84px]">
                        <div class="p-5 pt-10 text-white">
                            <p class="text-start text-4xl font-bold font-serif">70%</p>
                            <p class="mt-2 leading-5 text-sm">
                                Hundreds of projects, <br>
                                Millions of dollars lost, <br>
                                due to lack of DevOps knowledge
                            </p>
                        </div>
                        <div class="bottom-2 w-48 left-2 h-14 p-3 absolute rounded-3xl bg-slate-300 bg-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p  class="md:text-base text-2xl font-medium text-white pl-2">Donate Now</p>
                            <button @click="redirect()" type="button" class="h-9 w-9 bg-orange-400 hover:bg-white absolute right-3 rounded-full" ><span class="text-2xl font-serif text-center">&#8599;</span></button>
                        </div>
                    </div>
                    <TextPlaceholder title="Come join our cause" class="bg-neutral-800"></TextPlaceholder>
                </div>

                <div class="hidden md:inline-block md:mt-[44px]">
                    <div class="right-facing-folder-inner-cover">
                        <div class="bg-neutral-900 bg-opacity-60 h-full rounded-[24px_20px_0_0]"></div>
                    </div>
                    <div class="right-facing-folder-inner mr-2 items-center">
                        <div class="bg-neutral-900 bg-opacity-60 h-full rounded-[0_24px_24px_24px]">
                            <div class="p-5 pt-6 text-white">
                                <p class="text-start text-base font-normal opacity-70">Technology</p>
                                <p class="bottom-4 absolute leading-6 text-xl opacity-95">
                                    Take DevOps to thousands of Africans
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="w-60 h-56 mt-[15%] relative md:mt-28 p-2 rounded-3xl mr-2 mx-1 bg-orange-200 flex-col">
                    <p class="text-center text-neutral-900 mt-12 text-2xl md:text-2xl font-bold md:font-semibold leading-20">Join 5000+ <br>people donate</p>
                    <div class="top-0 w-full h-14 p-3 mt-10 rounded-3xl bg-slate-400 bg-opacity-50 justify-start items-center gap-2 inline-flex">
                        <p  class="md:text-base text-2xl font-medium pl-2">Learn More</p>
                        <button @click="$router.push({ name: 'About' })" class="h-9 w-9 md:relative bg-orange-900 hover:bg-black md:left-16 rounded-full"><span class="text-2xl text-white font-serif text-center">&#8599;</span></button>
                    </div>
                </div>

                <div class="hidden md:inline-block md:mt-[44px] relative">
                    <div class="left-facing-folder-inner-cover">
                        <div class="bg-neutral-900 bg-opacity-60 h-full rounded-[24px_20px_0_0]"></div>
                    </div>
                    <div class="left-facing-folder-inner mr-2 items-center">
                        <div class="bg-neutral-900 bg-opacity-60 h-full rounded-[24px_0_24px_24px]">
                            <div class="p-5 pt-6 text-white">
                                <p class="text-start text-base font-normal opacity-70">Education</p>
                                <p class="bottom-4 absolute leading-6 text-xl opacity-95">
                                    Take DevOps to thousands of Africans
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="hidden lg:flex lg:flex-col">
                    <div class="left-facing-folder-outer mt-[-84px]">
                        <img src="../assets/donation/world-in-hands.png" alt="" class="pt-10 scale-75">
                        <div class="bottom-2 w-48 left-2 h-14 p-3 absolute rounded-3xl bg-slate-300 bg-opacity-40 justify-start items-center gap-2 inline-flex">
                            <p  class="md:text-base text-2xl font-medium pl-2">Explore More</p>
                            <button @click="$router.push({ name: 'About' })" type="button" class="h-9 w-9 bg-orange-900 hover:bg-black absolute right-3 rounded-full text-center cursor-pointer"><span class="text-2xl text-white font-serif text-center">&#8599;</span></button>
                        </div>
                    </div>
                    <TextPlaceholder title="The future is here" textColor="white" class="relative bg-orange-950"></TextPlaceholder>
                </div>
            </section>
        </div>
        
    </div>
</template>


<style>
  
.right-facing-folder-outer {
    @apply w-52 bg-cover bg-orange-900;
    height: 280px;
    position: relative;
    border-radius: 0 24px 24px 24px;
}
  
.right-facing-folder-outer:before {
    @apply bg-orange-900;
    content: '';
    width: 50%;
    height: 16px;
    border-radius: 20px 24px 0 0;
    position: absolute;
    top: -14px;
    left: 0px;
}

.right-facing-folder-inner {
    @apply w-52 bg-cover bg-[url('../assets/donation/team.jpg')];
    height: 280px;
    position: relative;
    border-radius: 0 24px 24px 24px;
}
  
.right-facing-folder-inner-cover {
    @apply bg-[url('../assets/donation/team.jpg')];
    content: '';
    width: 50%;
    height: 16px;
    border-radius: 20px 24px 0 0;
    position: relative;
}

.left-facing-folder-outer {
    @apply w-52 bg-cover bg-orange-300;
    height: 280px;
    position: relative;
    border-radius: 24px 0 24px 24px;
  }
  
.left-facing-folder-outer:before {
    @apply bg-orange-300;
    content: '';
    width: 50%;
    height: 16px;
    border-radius: 24px 20px 0 0;
    position: absolute;
    top: -14px;
    right: 0px;
}

.left-facing-folder-inner {
    @apply w-52 bg-cover bg-[url('../assets/donation/team.jpg')];
    height: 280px;
    position: relative;
    border-radius: 24px 0 24px 24px;
  }
  
.left-facing-folder-inner-cover {
    @apply bg-[url('../assets/donation/team.jpg')];
    content: '';
    width: 50%;
    height: 16px;
    border-radius: 24px 20px 0 0;
    position: relative;
    top: 0px;
    left: 46.3%;
}
</style>