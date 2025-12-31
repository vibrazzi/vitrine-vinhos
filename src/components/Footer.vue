<template>
  <footer class="z-10 text-background bg-secondary" role="contentinfo">
    <div class="container p-8 flex flex-col md:flex-row justify-between items-center">
      <!-- Logo ou Nome da Marca -->
      <div class="text-white text-3xl font-bold text-center md:text-left font-playfair">
        <span class="text-accent">Vitrine Vinhos</span>
        <p class="text-sm font-montserrat font-normal mt-2 text-gray-300">W Lounge Premium</p>
      </div>

      <!-- Direitos autorais -->
      <div class="mt-4 md:mt-0 text-center md:text-right">
        <p class="text-sm font-montserrat">
          &copy; {{ new Date().getFullYear() }} Vitrine Vinhos. Todos os direitos reservados.
        </p>
        <p class="text-xs text-gray-400 mt-1 font-montserrat">
          Desenvolvido por <a href="https://portifolio-vue-delta.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Webert Fernandes Souza</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Nenhuma lógica adicional necessária no momento
</script>

<style scoped>
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .container > div {
    margin-bottom: 1rem;
  }
}
</style>