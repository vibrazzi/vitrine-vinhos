<template>
  <section class="font-playfair">
    <NavBar />
    <div class="flex flex-col justify-center items-center min-h-screen">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <!-- Product Image -->
          <div class="md:flex-1 px-4">
            <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                v-if="Product"
                :src="Product.img"
                alt="product image"
                class="w-full h-full object-cover"
                data-aos="fade-right"
              />
            </div>
          </div>
          <!-- End Product Image -->

          <!-- Product Details -->
          <div class="md:flex-1 px-4" data-aos="fade-left">
            <h2 v-if="Product" class="text-2xl font-bold mb-2">{{ Product.title }}</h2>
            <p class="text-sm mb-4">
              A uva Cabernet Sauvignon nasceu no berço da história do vinho:
              a França, mais especificamente na tradicional Bordeaux, principal
              região produtora de vinho do mundo. A casta recebeu este nome por
              ser cruzamento entre as uvas Cabernet Franc (tinta) e Sauvignon
              Blanc (branca), ambas nascidas na região francesa.
            </p>
            <div>
              <span class="font-bold text-gray-700">Descrição do produto</span>
              <p class="text-gray-600 text-sm mt-2">
                O vinho Tantehue Cabernet Sauvignon é uma celebração da tradição chilena, 
                produzido pela renomada vinícola Ventisquero. Originário do Valle Central, 
                este vinho tinto seco destaca-se por sua elegância e equilíbrio...
              </p>
            </div>
          </div>
          <!-- End Product Details -->
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
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Components
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const ContactSection = defineAsyncComponent(() => import("@/components/ContactSection.vue"));

// Variables
const route = useRoute();
const store = useStore();
const id = ref(null);
const Product = ref(null);
const quantity = ref(1);

// Functions
const decrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const increase = () => {
  quantity.value++;
};

const notify = (message) => {
  toast(message, {
    autoClose: 3000,
    position: toast.POSITION.TOP_CENTER,
    toastStyle: { color: "#743820" },
  });
};

const addToCart = () => {
  const Q = quantity.value;
  const product = Product.value;
  if (product) {
    store.dispatch("addToCart", { product, Q });
    notify("O produto foi adicionado ao carrinho com sucesso!");
  }
};

// Load Product on Component Mount
onBeforeMount(async () => {
  id.value = route.params.id;
  const numericId = Number(id.value);
  if (!isNaN(numericId)) {
    await store.dispatch("getProductIdAc", numericId);
    Product.value = store.getters["getProductId"];
  }
});
</script>

<style>
/* Adicione qualquer estilo adicional se necessário */
</style>