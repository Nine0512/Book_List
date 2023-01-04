<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: Array,
    default: [],
    required: true
  }
})
</script>

<template>
<div class="form-control w-full max-w-xs px-5">
  <label class="label">
    <span class="label-text">{{ props.title }}</span>
  </label>
  <select class="select select-bordered">
    <option disabled selected>Pick one</option>
    <option v-for="item in props.detail" :key="item">{{ item }}</option>
  </select>
</div>
</template>