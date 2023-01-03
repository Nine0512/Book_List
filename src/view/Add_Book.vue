<script setup>
import InputVue from "../components/Input.vue";
</script>

<template>
  <div class="grid justify-items-start m-10">
    <h1 class="font-bold text-xl">Book Information</h1>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 place-items-center m-8"
    >
      <InputVue title="Title" />
      <InputVue title="ISBN" />
      <InputVue title="Author" />
      <InputVue title="Publisher" />
      <InputVue title="Description" />
      <InputVue title="Price" />
      <InputVue title="Category" />
    </div>
  </div>
</template>

<style scoped></style>
