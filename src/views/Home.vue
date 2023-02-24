<script setup lang="ts">
import AppHeader from "../components/layouts/AppHeader.vue"
import MainContainer from "../components/layouts/AppContainer.vue"
import AppFooter from "../components/layouts/AppFooter.vue"
import AppSection from "../components/layouts/AppSection.vue"
import SearchForm from "../components/SearchForm.vue"
</script>

<template>
  <AppHeader />
  <main-container>
    <app-section>
      <SearchForm />
    </app-section>
  </main-container>
  <AppFooter />
</template>

<style scoped></style>
