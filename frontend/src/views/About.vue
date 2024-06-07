<script setup>
    import { ref } from 'vue';
    import CTABtn from '../components/buttons/CTABtn.vue';

    const companyDescription = ref({
        "heading": "We are a non-profit organization\ndedicated to making a positive impact\nthrough ",
        "body_main": 'We are driven by a singular goal: to empower and uplift the African community through innovative solutions and initiatives. Our commitment is rooted in the belief that positive change begins with meaningful actions, and we are dedicated to making a difference in the lives of individuals across the African continent through DevOps.',
        "body_sub": '\nOur mission is to catalyze progress by implementing the power of technology and human creativity. We seek to create sustainable solutions that promote education (online access to free libraries), access to information, free commonly known healthcare databases people can cross reference symptoms of various illnesses.'
    });
</script>

<template>
    <div class="px-16 py-2 mt-auto w-full h-[80%] md:h-[90%]">
        <div class="w-[100%] gap-4 md:gap-x-4 md:h-auto mt-auto mb-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 relative">
            <section class="md:h-auto ml-2 pl-4 pr-4 relative">
                <p class="mt-0 md:mt-auto text-title-text-color text-3xl text-center md:text-start md:text-4xl font-bold md:leading-10">
                    About Us
                </p>
                <div class="mt-8 relative">
                    <div class="text-center md:text-start">
                        <span class="text-center md:text-start whitespace-pre-line text-secondary-color text-base sm:text-2xl font-semibold opacity-90 leading-10">
                            {{ companyDescription.heading }}
                        </span>
                        <span class="text-primary-color text-base sm:text-2xl font-semibold opacity-90 leading-10">DevOps</span>    
                    </div>
                    <div class="mt-8 md:mt-4 whitespace-pre-line text-justify md:text-justify text-regular-text-color text-lg font-normal leading-9 tracking-tight">
                        {{ companyDescription.body_main }}
                    </div>
                    <div class="hidden sm:block mt-8 md:mt-4 whitespace-pre-line text-justify md:text-justify text-regular-text-color text-lg font-normal leading-9 tracking-tight">
                        {{ companyDescription.body_sub }}
                    </div>
                    <div class="absolute left-0 right-0 flex justify-center md:justify-start items-center">
                        <CTABtn @click="$router.push({ name: 'Contact' })" title="Get In Touch" textColor="black" buttonType="button" class="mt-10 opacity-90 bg-primary-color"></CTABtn>
                    </div>
                    
                </div>
                </section>
            <section class="hidden md:flex justify-start items-center">
                <img class="mt-6 relative scale-85" src="../assets/about/team.png" alt="Hero Image">
            </section>
        </div>
    </div>
    <br>
</template>