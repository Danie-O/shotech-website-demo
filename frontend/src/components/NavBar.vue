<script setup>
    import { ref } from 'vue';

    const showMenu = ref(false);
    const toggleNav = () => {
        showMenu.value = !showMenu.value;
        
    };
</script>


<template>
    <div class="grid-rows-2">
        <nav class="nav-bar mt-6 md:mt-0 h-28 px-16 py-8 m-auto md:flex md:justify-between md:items-center relative">
            <div class="justify-center text-5xl flex md:ml-[24px] md:items-center md:flex">
                <span class="text-secondary-color text-2xl md:text-4xl font-semibold">Shoetan</span><span class="highlight-text text-stone-500 text-2xl md:text-4xl font-semibold">Inc</span>
            </div>
            
            <!-- Mobile menu button -->
            <button @click="toggleNav" class="absolute origin-bottom-left md:hidden bottom-12 right-12 cursor-pointer" type="button">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu">
                    <path id="94 - Menu" d="M4 13H28C28.3978 13 28.7794 12.842 29.0607 12.5607C29.342 12.2794 29.5 11.8978 29.5 11.5C29.5 11.1022 29.342 10.7206 29.0607 10.4393C28.7794 10.158 28.3978 10 28 10H4C3.60217 10 3.22065 10.158 2.93934 10.4393C2.65804 10.7206 2.5 11.1022 2.5 11.5C2.5 11.8978 2.65804 12.2794 2.93934 12.5607C3.22065 12.842 3.60217 13 4 13ZM14 22H28C28.3978 22 28.7794 21.842 29.0607 21.5607C29.342 21.2794 29.5 20.8978 29.5 20.5C29.5 20.1022 29.342 19.7206 29.0607 19.4393C28.7794 19.158 28.3978 19 28 19H14C13.6022 19 13.2206 19.158 12.9393 19.4393C12.658 19.7206 12.5 20.1022 12.5 20.5C12.5 20.8978 12.658 21.2794 12.9393 21.5607C13.2206 21.842 13.6022 22 14 22Z" fill="#424241"/>
                    </g>
                </svg>
            </button>
            
            <!-- Large screen menu items -->
            <div>
                <ul class="menu p-4 w-auto md:w-96 md:h-10 ml-40 lg:ml-80 gap-14 hidden md:inline-flex md:items-center cursor-pointer">
                    <li :class="$route.name === 'Home' ? 'opacity-100 md:bg-inherit bg-orange-500' : 'opacity-50'" class="text-neutral-700 hover:text-orange-500 hover:opacity-90 text-lg font-normal leading-loose"><router-link :to="{ name: 'Home'}">Home</router-link></li>
                    <li :class="$route.name === 'About' ? 'opacity-100 md:bg-inherit bg-orange-500' : 'opacity-50'" class="text-neutral-700 hover:text-orange-500 hover:opacity-90 text-lg font-normal leading-loose"><router-link :to="{ name: 'About' }">About</router-link></li>
                    <li :class="$route.name === 'Contact' ? 'opacity-100 md:bg-inherit bg-orange-500' : 'opacity-50'" class="text-neutral-700 hover:text-orange-500 hover:opacity-90 text-lg font-normal leading-loose"><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
                    <li :class="$route.name === 'Donate' ? 'opacity-100 md:bg-inherit bg-orange-500' : 'opacity-50'" class="text-neutral-700 hover:text-orange-500 hover:opacity-90 text-lg font-normal leading-loose"><router-link :to="{ name: 'Donate' }">Donate</router-link></li>
                </ul>
            </div>            
             
            <!-- Language(s) -->
            <div class="w-[320px] relative ml-32 lg:ml-8">
                <div class="hidden w-14 h-8 gap-4 md:inline-flex lg:ml-52 md:end-0">
                    <button class="text-neutral-700 text-lg font-normal underline leading-loose" type="button">EN</button>
                </div>
            </div>
           
        </nav>

        <!-- Mobile menu items-->
        <div class="bg-orange-200 z-20">
            <ul @click="toggleNav" :class="showMenu ? 'visible' : 'hidden'" 
                class="cursor-pointer text-center text-neutral-700 text-lg font-normal leading-loose"
            >
                <li :class="$route.name === 'Home'? 'opacity-100 text-secondary-color font-semibold' : 'opacity-70'" class="mobile-menu-item"><router-link :to="{ name: 'Home' }" class="mobile-menu-item">Home</router-link></li>
                <li :class="$route.name === 'About'? 'opacity-100 text-secondary-color font-semibold' : 'opacity-70'" class="mobile-menu-item"><router-link :to="{ name: 'About' }" class="mobile-menu-item">About</router-link></li>
                <li :class="$route.name === 'Contact'? 'opacity-100 text-secondary-color font-semibold' : 'opacity-70'" class="mobile-menu-item"><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
                <li :class="$route.name === 'Donate'? 'opacity-100 text-secondary-color font-semibold' : 'opacity-70'" class="mobile-menu-item"><router-link :to="{ name: 'Donate' }">Donate</router-link></li>
            </ul>
        </div>  
    </div>
        
</template>



<style scoped>
.highlight-text {
    @apply text-orange-500;
    
}
.highlight-icon {
    @apply bg-orange-500
}

@media (max-width: 767px) {
    .nav-bar {
        @apply relative
    }
    
    .menu {
        @apply absolute min-h-full top-[100%] w-[10%] right-12 mr-[5px];
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .mobile-menu-item {
        @apply hover:text-secondary-color hover:font-semibold hover:bg-white
    }
}

</style>