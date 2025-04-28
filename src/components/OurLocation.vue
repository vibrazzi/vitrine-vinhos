<template>
  <section class="mt-30" data-aos="fade-up">
    <div class="bg-primary p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-bold text-center text-secondary mb-6">
        ✈️ Acompanhe Seu Voo em Tempo Real
      </h2>
      <p class="text-lg text-center text-gray-700 mb-8">
        Visualize chegadas e partidas do Aeroporto de Uberlândia diretamente aqui.
      </p>
      <div class="flex justify-center items-center">
        <iframe 
          frameborder="0" 
          scrolling="no" 
          marginheight="0" 
          marginwidth="0" 
          width="1200" 
          height="500" 
          class="rounded-lg shadow-lg"
          src="https://www.airnavradar.com/?widget=1&z=8&lat=-18.8831&lng=-48.2177&airportCardRight=true&showLabels=true&showAirlineLogo=true&showFn=true&showRoute=true&showRegistration=true&showAircraftModel=true&class=A,B,G,C,M,H,&showSquawk=7600,7700">
        </iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
