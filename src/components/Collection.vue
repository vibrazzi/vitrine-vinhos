<template>
  <section id="collection" class="mt-32" data-aos="fade-up">
    <NavBar />
    <h1
      class="text-center mb-10 text-4xl/[0.9] font-medium tracking-tight text-black sm:text-7xl/[0.8] md:text-[5rem]/[0.9]"
    >
      Coleção
    </h1>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 md:gap-14 md:pt-12 lg:grid-cols-2"
    >
      <div
        v-for="element in collection"
        :key="element.id"
        class="w-full mx-auto flex items-center gap-4 flex-wrap"
      >
        <!-- Imagem do Produto -->
        <div class="max-h-[180px] flex-shrink-0 w-[120px] h-[180px]">
          <img
            :src="element.img"
            :alt="`Imagem do produto ${element.name}`"
            class="scale-100 group-hover:scale-105 transition-all duration-500 w-full h-full object-cover rounded-lg"
          />
        </div>
        <!-- Descrição do Produto -->
        <div class="text-left flex-1">
          <p class="font-bold uppercase text-black text-lg">{{ element.name }}</p>
          <p v-if="element.subtitle" class="text-sm text-gray-500 italic">{{ element.subtitle }}</p>
          <p v-html="element.description" class="text-sm text-gray-600 mt-2"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Lista de produtos da coleção
const collection = ref([
  {
    id: 2,
    name: "Cabernet Sauvignon",
    subtitle: "vinho fino, tinto e seco",
    img: "/CabernetVinho.png",
    description:
      "Os aromas destacam frutas vermelhas e negras, como framboesa, ameixa e amora. <strong>Acompanha queijos maduros, carnes grelhadas e pratos picantes</strong>🍷✨",
  },
  {
    id: 3,
    name: "Merlot",
    subtitle: "vinho fino, tinto e seco",
    img: "/MerlotVinho.png",
    description:
      "Atrativo e elegante, possui intensidade aromática e frutada como framboesas, morangos, mirtilos e cassis. <strong>Harmoniza com queijos maduros, carnes brancas e grelhados</strong>🍷✨",
  },
  {
    id: 4,
    name: "Carmenere",
    subtitle: "vinho fino, tinto e seco",
    img: "/CarmenereVinho.png",
    description:
      "Frutas vermelhas frescas como morango, cereja e groselha, combinando com notas picantes e toque de baunilha e chocolate. <strong>Ideal para pratos como ensopados e comida com especiarias</strong>🍷✨",
  },
  {
    id: 1,
    name: "Sauvignon Blanc",
    subtitle: "vinho fino, branco e seco",
    img: "/BlancVinho.png",
    description:
      "Este vinho se caracteriza com uma cor amarelo claro e um aroma intenso de frutas tropicais e cítricas. <strong>O que faz ele combinar com mariscos, pratos com molhos suaves e carnes brancas</strong>🍷✨",
  },
]);
</script>

<style>
img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
