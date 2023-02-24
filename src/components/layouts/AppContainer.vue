<script setup lang="ts"></script>

<template>
  <main><slot /></main>
</template>

<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem 2rem;
}
</style>
