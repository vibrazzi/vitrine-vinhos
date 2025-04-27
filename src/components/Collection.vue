<template>
  <section id="collection" class="mt-32" data-aos="fade-up">
    <h1
      class="text-center mb-10 text-4xl/[0.9] font-medium tracking-tight text-black sm:text-7xl/[0.8] md:text-[5rem]/[0.9]"
    >
      Coleção
    </h1>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-4 text-center"
    >
      <div
        v-for="element in collection"
        :key="element.id"
        class="w-full mx-auto flex flex-col items-center sm:items-start"
      >
        <div class="mb-4 max-h-[150px] flex justify-center">
          <img
            :src="element.img"
            alt="collection"
            class="scale-100 group-hover:scale-105 transition-all duration-500 h-[150px] w-[150px] max-w-full object-cover rounded-lg"
          />
        </div>
        <p class="font-normal uppercase text-black mt-2">{{ element.name }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const collection = ref([
{ id: 2, name: "Cabernet Sauvignon", img: "/cabernet.jpeg" },
{ id: 3, name: "Merlot", img: "/merlot.jpeg" },
{ id: 4, name: "Carmenere", img: "/carmenere.png" },
{ id: 1, name: "Sauvignon Blanc", img: "/blanc.jpeg" },
]);
</script>

<style>
img {
aspect-ratio: 1/1;
object-fit: cover;
}
</style>
