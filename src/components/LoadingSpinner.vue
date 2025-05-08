<template>
  <div class="flex justify-center items-center w-full h-screen bg-primary" aria-label="Carregando...">
    <svg
      class="h-16 w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c0908c" />
          <stop offset="100%" stop-color="#f4a261" />
        </linearGradient>
      </defs>
      <circle
        class="spinner-circle"
        cx="12"
        cy="12"
        r="10"
        stroke="url(#gradient1)"
        stroke-width="4"
        fill="none"
      ></circle>
    </svg>
  </div>
</template>

<style scoped>
.spinner-circle {
  animation: spin 1.5s linear infinite, pulse 1.5s ease-in-out infinite;
  transform-origin: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    stroke-width: 4;
  }
  50% {
    stroke-width: 8;
  }
}
</style>