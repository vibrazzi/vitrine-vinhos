<template>
  <div class="w-[215px] text-center">
    <router-link
      :to="`/product-details/${product.id}`"
      class="rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-6 text-white font-medium text-sm hover:shadow-lg hover:from-yellow-500 hover:to-red-500 transition duration-300 ease-in-out absolute"
    >
      Detalhes
    </router-link>
    <figure class="w-full h-[300px]">
      <img
        :src="product.img"
        alt="product image"
        loading="lazy"
        class="min-h-[250px] max-h-[251px] rounded-md shadow-md"
      />
    </figure>
    <article>
      <div class="h-[50px]">
        <h3 class="font-bold">{{ product.title }}</h3>
      </div>
    </article>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  product: Object,
});
</script>
