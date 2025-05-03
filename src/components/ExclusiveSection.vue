<template>
  <section id="vinhos" class="mt-32" data-aos="fade-up">
    <h1
      class="text-center mb-20 text-4xl/[0.9] font-medium tracking-tight text-black sm:text-7xl/[0.8] 
      md:text-[5rem]/[0.9]"
    >
      Sobre nossos vinhos
    </h1>
    <Carousel :wrap-around="true" v-bind="settings" :breakpoints="breakpoints" aria-label="Carrossel de vinhos exclusivos">
      <Slide v-for="(product, index) in products" :key="index">
        <ProductCard :product="product" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { useStore } from "vuex";
import ProductCard from "./ProductCard.vue";

// Acessando o Vuex Store
const store = useStore();
const products = computed(() => store.getters["getProducts"]);

// Configurações do carrossel
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
  wrapAround: true,
});

// Breakpoints do carrossel
const breakpoints = ref({
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
});
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>
