<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
<div class="form-control w-full max-w-xs px-5">
  <label class="label">
    <span class="label-text">{{ props.title }}</span>
  </label>
  <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
</div>
</template>