<template>
  <div class="responsive-width text-center relative">
    <!-- Botão de Detalhes -->
    <router-link
      :to="`/product-details/${product.id}`"
      class="rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-6 text-white font-medium text-sm hover:shadow-lg hover:from-yellow-500 hover:to-red-500 transition duration-300 ease-in-out absolute top-2 right-2 z-10 font-montserrat focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label="Ver detalhes do produto {{ product.title }}"
    >
      Detalhes
    </router-link>

    <!-- Imagem do Produto -->
    <figure class="w-full h-[300px]">
      <img
        :src="product.img"
        :alt="`Imagem do produto ${product.title}`"
        loading="lazy"
        class="w-full h-full object-cover rounded-md shadow-md"
      />
    </figure>

    <!-- Informações do Produto -->
    <article class="mt-4">
      <div class="h-[50px]">
        <h3 class="font-bold text-lg text-gray-800 font-montserrat">{{ product.title }}</h3>
      </div>
    </article>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Ajuste para responsividade */
@media (max-width: 768px) {
  .responsive-width {
    width: 100%;
  }
}
</style>
