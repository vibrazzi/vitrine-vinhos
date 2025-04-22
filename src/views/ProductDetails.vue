<template>
    <section class="font-playfair">
      <NavBar />
      <div class="flex flex-col justify-center items-center min-h-screen">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <!--Product Image-->
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
                <img
                  :src="Product.img"
                  alt="product image"
                  class="w-full h-full object-cover"
                  data-aos="fade-right"
                />
              </div>
            </div>
            <!--End Product Image-->
  
            <!--Product Deatils-->
            <div class="md:flex-1 px-4" data-aos="fade-left">
              <h2 class="text-2xl font-bold mb-2">{{ Product.title }}</h2>
              <p class="text-sm mb-4">
                A uva Cabernet Sauvignon nasceu no berço da história do vinho: a França, mais especificamente na tradicional Bordeaux, principal região produtora de vinho do mundo. A casta recebeu este nome por ser cruzamento entre as uvas Cabernet Franc (tinta) e Sauvignon Blanc (branca), ambas nascidas na região francesa
              </p>
              <div class="flex mb-4">
                <div class="mr-4">
                </div>
              </div>

              <div>
                <span class="font-bold text-gray-700">Descrição do produto</span>
                <p class="text-gray-600 text-sm mt-2">
                    O vinho Tantehue Cabernet Sauvignon é uma celebração da tradição chilena, produzido pela renomada vinícola Ventisquero. Originário do Valle Central, este vinho tinto seco destaca-se por sua elegância e equilíbrio. Composto exclusivamente pela uva Cabernet Sauvignon, ele apresenta uma tonalidade rubi brilhante e aromas intensos de frutas vermelhas e negras, como morangos e cassis, harmonizados com notas sutis de pimenta e caramelo.
No paladar, o Tantehue Cabernet Sauvignon oferece taninos sedosos e uma acidez equilibrada, proporcionando um final persistente e agradável. Sua fermentação ocorre em tanques de aço inoxidável com controle de temperatura, e parte do vinho é maturada em barricas de carvalho francês e americano, conferindo-lhe um toque especial de complexidade.
Ideal para acompanhar carnes grelhadas, queijos maduros e massas com molhos vermelhos, este vinho é uma homenagem ao povoado de Tantehue, onde vivem muitos dos trabalhadores da vinícola Ventisquero. Cada taça reflete a dedicação e paixão por vinhos de alta qualidade.

                </p>
              </div>
              <div class="flex mt-10">
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
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
  const ContactSection = defineAsyncComponent(() =>
    import("@/components/ContactSection.vue")
  );
  const route = useRoute();
  const store = useStore();
  const id = ref(null);
  const Product = ref(null);
  const quantity = ref(1);
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
    store.dispatch("addToCart", { product, Q });
    notify("product is added to your cart");
    console.log(store.getters["getCart"]);
  };
  onBeforeMount(async () => {
    id.value = route.params.id;
    const numericId = Number(id.value);
    if (!isNaN(numericId)) {
      await store.dispatch("getProductIdAc", numericId);
      Product.value = await store.getters["getProductId"];
    }
  });
  </script>