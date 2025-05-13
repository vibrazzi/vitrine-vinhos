<template>
  <footer class="z-10 text-background bg-secondary">
    <div class="container p-8 flex flex-col md:flex-row justify-between items-center">
      <!-- Logo ou Nome da Marca -->
      <div class="text-white text-3xl font-bold text-center md:text-left">
        Vitrine Vinhos
      </div>

      <!-- Direitos autorais -->
      <p class="mt-4 md:mt-0 text-sm text-center md:text-right">
        &copy; {{ new Date().getFullYear() }} Vitrine Vinhos. Todos os direitos reservados.
      </p>
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