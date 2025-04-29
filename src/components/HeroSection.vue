<template>
  <section class="relative w-full bg-secondary">
    <!-- Container Principal -->
    <div class="w-full lg:px-16 md:px-12 px-6 mx-auto relative" data-aos="zoom-in">
      <div class="grid lg:grid-cols-2 relative pt-24 mx-auto">
        <!-- Texto Hero -->
        <div class="md:mt-5 relative">
          <h1 class="text-balance text-3xl font-medium tracking-tight text-black sm:text-6xl md:text-[3rem] font-montserrat">
            Descubra o prazer em cada taça <span class="gradient-text">Tantehue!</span>
            <img src="/gif.gif" alt="shining" class="w-[32%] inline-block -ml-10 align-middle" />
          </h1>
          <p class="mt-8 text-lg text-gray-700">
            Aproveite o sabor, a tradição e a elegância em cada garrafa.
          </p>
        </div>
        <!-- Carrossel de Vinhos -->
        <div class="lg:h-full w-[90%] md:w-full mt-20 md:mt-0">
          <Carousel :wrap-around="true" :breakpoints="breakpoints">
            <Slide v-for="(image, index) in images" :key="index">
              <img
                :src="image"
                alt="wine image"
                class="hover-zoom glowing-border carousel__image w-[300px] h-[430px] max-w-full rounded-3xl object-cover transition-transform duration-500"
              />
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </div>

    <!-- Marquee Secundário -->
    <div class="outer-running-about mt-10 bg-black rounded-md shadow-sm">
  <div class="running-text max-w-full text-center">
    <Vue3Marquee speed="40" pauseOnHover>
      <p class="text-base text-gray-200 font-medium">
        🍷<span class="text-white">Tantehue</span> – Um brinde à tradição!
      </p>
    </Vue3Marquee>
  </div>
</div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

// Lista de imagens do carrossel
const images = ref([
  "/blanc.png",
  "/merlot.png",
  "/cabernet.jpg",
  "/camenere.png",
  "/rose.png",
]);

// Configuração de pontos de quebra para responsividade
const breakpoints = ref({
  640: { itemsToShow: 2, snapAlign: "center" },
  1024: { itemsToShow: 3, snapAlign: "center" },
});
</script>

<style>
/* Estilos para HeroSection */
.gradient-text {
  background: linear-gradient(90deg, #921342, #ff8800);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hover-zoom {
  transition: transform 0.5s ease-in-out;
}

.hover-zoom:hover {
  transform: scale(1.1);
}

.glowing-border {
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.6), 0 0 25px rgba(255, 255, 255, 0.4);
}

.glowing-border:hover {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
}
</style>
