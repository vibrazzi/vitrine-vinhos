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
              Desfrute deste vinho único, elaborado com tradição e qualidade!
            </p>
            <div>
              <span class="font-bold text-gray-700">Descrição do produto</span>
              <p class="text-gray-600 text-sm mt-2">
                Descubra o sabor e elegância deste vinho, ideal para todas as ocasiões especiais.
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
import "vue3-toastify/dist/index.css";

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
    await store.dispatch("getProductIdAc", numericId);
    Product.value = store.getters["getProductId"];
  }
});
</script>
