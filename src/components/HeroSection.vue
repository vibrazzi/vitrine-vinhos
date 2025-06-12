<template>
  <section class="relative w-full bg-primary">
    <!-- Container Principal -->
    <div class="w-full lg:px-16 md:px-12 px-6 mx-auto relative" data-aos="zoom-in">
      <div class="grid lg:grid-cols-2 relative pt-24 mx-auto">
        <!-- Texto Hero -->
        <div class="md:mt-5 relative animate-fade-in">
          <h1 class="text-balance text-3xl font-medium tracking-tight text-background sm:text-6xl md:text-[3rem] font-montserrat">
            Descubra o prazer em cada taça <span class="gradient-text 500 animate-glow">Tantehue!</span>
            <img src="/gif.gif" alt="Efeito brilhante" class="w-[32%] inline-block -ml-10 align-middle animate-pulse" />
          </h1>
          <p class="mt-8 text-lg text-accent">
            Aproveite o sabor, a tradição e a elegância em cada garrafa.
          </p>
        </div>

        <!-- Carrossel de Vinhos -->
        <div class="lg:h-full w-[90%] md:w-full mt-20 md:mt-0 animate-slide-in">
          <Carousel :wrap-around="true" :breakpoints="breakpoints" aria-label="Carrossel de vinhos exclusivos">
            <Slide v-for="(image, index) in images" :key="index">
              <div class="carousel-item">
                <img :src="image" :alt="`Imagem do vinho ${index + 1}`" class="carousel-image" />
              </div>
            </Slide>
            <template #addons>
              <Navigation class="carousel-navigation" />
            </template>
          </Carousel>
        </div>
      </div>
    </div>

    <!-- Marquee Secundário -->
    <div class="outer-running-about mt-10 bg-black rounded-md shadow-lg">
      <div class="running-text max-w-full text-center">
        <Vue3Marquee speed="40" pauseOnHover class="hover-scale">
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
]);

// Configuração de pontos de quebra para responsividade
const breakpoints = ref({
  640: { itemsToShow: 2, snapAlign: "center" },
  1024: { itemsToShow: 3, snapAlign: "center" },
});
</script>

<style scoped>
/* Estilos para HeroSection */
.gradient-text {
  background: linear-gradient(90deg, #4E2A2E, #C5A880);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Efeito de brilho pulsante */
@keyframes glow {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-glow {
  animation: glow 1.5s infinite ease-in-out;
}

/* Animação de fade-in */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}

/* Animação de entrada */
@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-in {
  animation: slide-in 1s ease-in-out;
}

/* Efeito de escala no marquee */
.hover-scale:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

/* Carrossel refinado */
.carousel-wrapper {
  width: 90%;
  max-width: 450px;
}

/* Cada item do carrossel */
.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.05);
  transition: transform 0.4s ease-in-out;
}

/* Imagem dentro do carrossel */
.carousel-image {
  width: 280px;
  height: 420px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease-in-out;
}

.carousel-item:hover {
  transform: scale(1.05);
}

/* Navegação refinada */
.carousel-navigation {
  filter: drop-shadow(0px 5px 10px rgba(255, 136, 0, 0.5));
}
</style>
