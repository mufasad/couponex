<script setup lang="ts">
import { ref } from "vue"
const input = ref("")
</script>

<template>
  <div class="search-form">
    <el-input v-model="input" placeholder="Finds coupon" />
    <el-button>Search</el-button>
  </div>
</template>

<style lang="scss" scoped>
.search-form {
  position: relative;
  display: flex;
  padding-top: 10vw;

  button {
    margin-left: 1rem;
    height: auto;
    font-size: 2.5vw;
    background-color: #646cff;
    border-color: #646cff;
    color: white;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 1;
    }
  }

  :deep(.el-input__wrapper) {
    background-color: #242424;
    box-shadow: 0 0 0 1px #646cff inset;
    padding: 0.5rem;

    input {
      color: white;
      font-size: 2.5vw;
      width: 50vw;
      padding: 0.5rem;
    }
  }
}
</style>
