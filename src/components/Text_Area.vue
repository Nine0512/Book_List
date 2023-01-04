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
  <textarea class="textarea textarea-bordered h-24" placeholder="Type Here"></textarea>
</div>
</template>