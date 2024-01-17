<script setup>
  import getAdvice from "./services/advices";
  import Card from "./components/card.vue";
  const advice = await getAdvice();
  const slip = advice.slip;

  console.log(advice);
</script>

<template>
  <Suspense>
    <Card :idAdvice="slip.id" :advice="slip.advice" />
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style lang="css" scoped></style>
