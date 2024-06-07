<script setup>
  import CTABtn from '../components/buttons/CTABtn.vue';
  import WatchVideoBtn from '../components/buttons/WatchVideoBtn.vue';
  import { ref, computed, onMounted } from 'vue';

  const heroSection = ref({
    "title": "#Impacting\nTechnology\nIn Africa",
    "subtitle": "Transforming African communities, one project at a time.",
    "statistics": [
      ["10+", "Pipeline\nprojects"],
      ["25+", "Awards\nWon"],
      ["15+", "Years of\nExperience"]
    ]
  });

  const carouselItems = [
    {
      number: '01',
      text: 'Our Vision',
      url: 'vision.png',
      caption: {
        tagline: 'Impact. Technology. Africa.',
        description: 'We are driven by the desire to make a positive impact across the African Continent.',
        cta: 'Learn More',
        redirect: 'About'
      }
    },
    {
      number: '02',
      text: 'Partnerships',
      url: 'partnerships.png',
      caption: {
        tagline: 'Trusted Industry Partnerships',
        description: `Have an idea? Reach out, let's make it a reality.`,
        cta: 'Contact Us',
        redirect: 'Contact'
      }
    },
    {
      number: '03',
      text: 'Projects',
      url: 'projects.png',
      caption: {
        tagline: 'Our Projects Cut Across Various Sectors',
        description: 'Explore innovative solutions to your challenges.',
        cta: 'Explore Now',
        redirect: 'About'
      }
    },
    {
      number: '04',
      text: 'Donate',
      url: 'donate.png',
      caption: {
        tagline: 'Support our cause',
        description: 'Help us drive positive change across Africa!',
        cta: 'Donate Now',
        redirect: 'Donate'
      }
    }
  ];


  const activeIndex = ref(0);
  const lastIndex = carouselItems.length - 1;

  const changeActiveItem = (index) => {
    activeIndex.value = index;
  };

  const getActiveURL = (index) => {
    return new URL(`../assets/home/${carouselItems[index].url}`, import.meta.url).href;
  };

  onMounted(() => {
    setInterval(() => {
      const nextIndex = (activeIndex.value + 1) % carouselItems.length;
      changeActiveItem(nextIndex);
    }, 7000); 
  });

</script>


<template>
  <div class="main-container md:px-16 md:py-3 mt-auto w-full h-[80%] md:h-[90%]">
      <div class="w-[100%] md:py-8 gap-y-2 md:gap-y-3 md:h-auto mt-auto mb-auto grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-[60%_40%] lg:grid-cols-[40%_36%_19%]">
        <!-- Hero Text -->
        <section class="main-sections h-auto pl-4 pr-4 mr-[72px] relative md:col-start-1 md:col-end-2">
          <div class="flex flex-col gap-y-8 space-y-4">
            <div class="md:flex relative flex-col p-[10px] md:h-[258px] h-[150px]">
              <div class="text-title-text-color text-5xl whitespace-pre-line md:text-6xl font-bold md:leading-30">
                {{ heroSection.title }}
              </div>
              <div class="text-sub-text-color mt-8 md:h-auto text-xl font-normal leading-10">
                {{ heroSection.subtitle }}
              </div>
            </div>

            <div class="flex flex-row relative h-auto pt-4 md:pt-0 justify-between gap-x-3 mt-6 lg:mt-[200px]">
              <div class="w-[100%] p-[10px] mt-8 md:mt-0 lg:h-[80px] h-auto lg:mb-[10px] md:mr-0 flex-row justify-start">
                <CTABtn @click="$router.push({ name: 'About' })" title="Learn More" class="md:mt-0 hover:bg-primary-color mr-3"></CTABtn>
                <WatchVideoBtn></WatchVideoBtn>
              </div>
            </div>

            <div class="h-auto inline-grid grid-cols-3 md:pl-2 pt-5 md:pt-0 md:mt-14 align-center md:justify-start md:items-start md:gap-20 md:inline-flex">
              <div class="flex-col justify-start items-center gap-2 inline-flex">
                  <div class="text-title-text-color text-4xl md:text-5xl lg:text-4xl font-medium leading-10 mb-2">{{ heroSection.statistics[0][0] }}</div>
                  <div class="text-center text-sub-text-color text-xl md:text-lg font-normal whitespace-pre-line leading-loose">{{ heroSection.statistics[0][1] }}</div>
              </div>
              <div class="flex-col justify-start items-center gap-2 inline-flex">
                  <div class="text-title-text-color text-4xl md:text-5xl lg:text-4xl font-medium leading-10 mb-2">{{ heroSection.statistics[1][0] }}</div>
                  <div class="text-center text-sub-text-color text-xl md:text-lg font-normal whitespace-pre-line leading-loose">{{ heroSection.statistics[1][1] }}</div>
              </div>
              <div class="flex-col justify-start items-center gap-2 inline-flex">
                  <div class="text-title-text-color text-4xl md:text-5xl lg:text-4xl font-medium leading-10 mb-2">{{ heroSection.statistics[2][0] }}</div>
                  <div class="text-center text-sub-text-color text-xl md:text-lg font-normal whitespace-pre-line leading-loose">{{ heroSection.statistics[2][1] }}</div>
              </div>
            </div>
          </div> 
        </section>
        
        <!-- Hero Image Carousel -->
        <section class="slider hidden md:block relative md:z-1 md:mr-[206px] md:col-start-2 md:col-end-3 md:p-0">
          <div 
            class="image-carousel"
            v-for="(item, index) in carouselItems"
            :key="index"
          >
              <img class="img" :class="{'hidden': index != activeIndex}" :src="getActiveURL(index)" alt="">
          </div>
          
          <div class="top-[65%] lg:top-[80%] absolute w-[100%] h-auto ml-0 p-8 bg-white bg-opacity-80 shadow backdrop-blur-sm justify-center items-center gap-3 inline-flex z-20">
            <div class="items-stretch flex-col justify-start gap-2 inline-flex">
              <div class="text-neutral-500 text-xl font-lg leading-tight">{{ carouselItems[activeIndex].caption.tagline }}</div>
              <div class="w-30 text-neutral-700 text-base font-semibold leading-tight">{{ carouselItems[activeIndex].caption.description }}</div>
            </div>
            <div class="w-40 h-14 p-3 bg-stone-500 hover:bg-primary-color justify-center items-center text-center gap-2 flex">
              <router-link :to="{ name: carouselItems[activeIndex].caption.redirect }" class="text-white text-sm font-base">{{ carouselItems[activeIndex].caption.cta }}</router-link>
            </div>
          </div>
        </section>
        
        <!-- Text Carousel -->
        <aside class="hidden ml-[72px] p-4 justify-center items-center md:flex-col md:justify-start md:items-start gap-6 lg:inline-flex text-sm">
          <div class="h-[calc(4_*_5rem)] overflow-hidden relative bg-[#F6F4F1]">
            <div
              v-for="(item, index) in carouselItems"
              :key="index"
              class="carousel-item block relative"
              :class="{ 'active': index === activeIndex}"
              @click="changeActiveItem(index)"
            >
              <span :class="{ 'text-regular-text-color text-xl': index === activeIndex }" class="text-lg font-normal mr-6 text-sub-text-color">{{ item.number }}</span>
              <span :class="{ 'underline': index === activeIndex }">{{ item.text }}</span>
              <div class="carousel-line"   :class="{ 'visible': index===activeIndex && index !== lastIndex }"></div>
            </div>
          </div>
        </aside>
        
      </div>
  </div>
</template>


<style scoped>
  @media (max-width: 767px) {
    .main-sections {
      @apply text-center mt-[3%] m-auto
    }
  }
  
  .trailing-text {
    @apply absolute bottom-[-100px] right-[4px] text-[8rem] origin-bottom-right overflow-clip z-[0]
  }

  button {
    @apply cursor-pointer
  }

  .carousel-item {
    @apply relative h-8 text-2xl font-semibold text-title-text-color leading-10 whitespace-nowrap cursor-default hover:text-orange-500 transition-all;
  }

  .carousel-item.active {
    @apply z-[2] text-primary-color h-36 text-2xl font-bold text-opacity-100;
    transition:  0.8s ease-out infinite;
  }

  .carousel-line {
    @apply hidden h-20 mt-3 mb-4 ml-0 w-[1.5px] bg-primary-color absolute opacity-50 left-0 z-[1] transition-all;
    animation: 1.5s ease-out 30s infinite;
  }

  .carousel-line.visible {
    @apply block;
  }

  .slider{
    width:80%;
    height:100%;
    background: transparent;
    margin: 0 auto auto;
  }

  .img-carousel{
      width:100%;
      height:100%;
      background: transparent;
      position: relative;
      object-fit: contain;
  }

  .img {
    height: 90%;
    width: 80%;
    position: absolute;
    animation-name: fade-in;
    animation-duration: 1.5s;
  }

  @keyframes fade-in {
    from {opacity: .4;}
    to {opacity: 1;}
  }

</style>


