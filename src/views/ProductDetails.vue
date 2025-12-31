<template>
  <section class="font-playfair">
    <NavBar />
    <div class="flex flex-col justify-center items-center min-h-screen">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                v-if="Product"
                :src="Product.img"
                :alt="`Imagem do produto ${Product.title}`"
                class="w-full h-full object-cover"
                data-aos="fade-right"
              />
            </div>
          </div>

          <div class="md:flex-1 px-4" data-aos="fade-left">
            <h2 v-if="Product" class="text-2xl font-bold mb-2">{{ Product.title }}</h2>
            <div>
              <span class="font-bold text-gray-700">Descrição do produto</span>
              <p v-if="Product.description" class="text-gray-600 text-sm mt-2">
                {{ Product.description }}
              </p>
            </div>
            <div v-if="Product.price" class="mt-4">
              <p class="text-red-600 font-bold text-lg">R$ {{ Product.price.toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactSection />
  </section>
</template>

<script setup>
import { defineAsyncComponent, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const ContactSection = defineAsyncComponent(() => import("@/components/ContactSection.vue"));

const route = useRoute();
const store = useStore();
const id = ref(null);
const Product = ref(null);

onBeforeMount(async () => {
  id.value = route.params.id;
  const numericId = Number(id.value);
  if (!isNaN(numericId)) {
    await store.dispatch("fetchProductById", numericId);
    Product.value = store.getters["getProductById"](numericId);
  } else {
    console.error("ID inválido fornecido na rota.");
  }
});
</script>
