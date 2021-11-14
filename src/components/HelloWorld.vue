<script setup>
defineProps({
  msg: String
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    Visit <a href="https://vuejs.org/">vuejs.org</a> to learn more about Vue.
  </p>
</template>

<style scoped lang="postcss">
h1 {
  @apply text-4xl font-thin uppercase lg:text-6xl;
  color: #41B883;
}

p {
  @apply mx-auto my-4 leading-5 text-center dark:text-white;
}

a {
  @apply underline;
  color: #41B883;
}
</style>
