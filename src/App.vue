<template>
  <router-view />
</template>

<style lang="postcss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  font-size: 16px;
}

body {
  @apply grid min-h-screen place-items-center dark:bg-gray-800;
}
</style>
