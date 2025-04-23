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
      <p
        class="text-sm text-gray-600 mt-2 font-bold font-sans flex justify-between"
      >
      </p>
      <figure class="mt-10">
      </figure>
    </article>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  product: Object,
});

//call store of vuex
import { useStore } from "vuex";
const store = useStore();

//callToastify
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

//toastify function
const notify = (message) => {
  toast(message, {
    autoClose: 3000,
    position: toast.POSITION.TOP_CENTER,
    toastStyle: { color: "#743820" },
  });
};

//add to cart function
const addToCart = () => {
  const Q = 1;
  const product = props.product.value;
  store.dispatch("addToCart", { product, Q });
  notify("product is added to your cart");
  console.log(store.getters["getCart"]);
};
</script>