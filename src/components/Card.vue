<script setup>
  const props = defineProps({
    idAdvice: {
      type: Number,
    },
    advice: {
      type: String,
    },
  });
</script>

<template>
  <div class="bg-darkGrayishBlue p-9 rounded-md m-10 max-w-[850px] text-center">
    <h1
      class="text-3xl mb-4 font-thin text-neonGreen uppercase tracking-widest">
      advice #{{ props.idAdvice }}
    </h1>
    <p class="text-pretty text-lightCyan font-extrabold text-quote px-2">
      {{ props.advice }}
    </p>
    <img
      src="../assets/pattern-divider-desktop.svg"
      alt="Pattern divider"
      class="p-10" />
  </div>
</template>
