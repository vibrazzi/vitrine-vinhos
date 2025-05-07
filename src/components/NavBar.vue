<template>
  <header class="max-w-full z-20 bg-secondary">
    <div class="bg-black px-3 max-w-full">
      <div class="flex justify-center items-center container px-0"></div>
    </div>
    <nav
      class="flex items-center relative p-3 justify-between bg-secondary md:h-16 h-28 mx-auto md:px-4 container flex-wrap md:flex-nowrap"
    >
      <!-- Botão de alternância para dispositivos móveis -->
      <div class="md:hidden z-30">
        <button
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
          :aria-expanded="isMenuOpen"
          aria-controls="menu"
        >
          <span v-if="isMenuOpen" class="text-5xl">
            <img
              src="https://img.icons8.com/ios-filled/100/delete-sign.png"
              alt="Fechar menu"
              width="50"
              height="50"
            />
          </span>
          <span v-else class="text-5xl">
            <img
              src="https://img.icons8.com/ios-filled/100/menu--v6.png"
              alt="Abrir menu"
              width="50"
              height="50"
            />
          </span>
        </button>
      </div>

      <!-- LOGO -->
      <div
        :class="{
          'text-3xl font-bold flex': true,
          'justify-left': !isHome,
        }"
      >
        <router-link to="/" class="text-primary">Vitrine Vinhos</router-link>
      </div>

      <!-- Menu Responsivo -->
      <div
        id="menu"
        :class="[ 
          'fixed inset-0 z-20 flex flex-col items-center justify-center bg-secondary md:relative md:bg-transparent md:flex md:justify-between md:flex-row md:space-x-5',
          isMenuOpen ? 'block' : 'hidden',
        ]"
      >
        <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 font-medium">
          <li v-for="item in Menu" :key="item.name">
            <router-link
              :to="item.href"
              @click.native="handleMenuClick(item.href)"
              class="block transition hover:text-primary ease-linear text-2xl md:text-sm lg:text-lg text-black"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isHome: Boolean,
});

const isMenuOpen = ref(false);
const Menu = ref([]);

// Configuração do menu com base na página
if (props.isHome) {
  Menu.value = [
    { name: "Início", href: "/home" },
    { name: "Coleção", href: "#collection" },
    { name: "Vinhos", href: "#vinhos" },
  ];
} else {
  Menu.value = [{ name: "Voltar", href: "/home" }];
}

// Função para rolar até a seção ou navegar
const handleMenuClick = (href) => {
  isMenuOpen.value = false;
  if (href.startsWith("#")) {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
/* Adicione estilos personalizados, se necessário */
</style>
