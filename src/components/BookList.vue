<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card w-full sm:w-72 md:w-100 bg-base-100 shadow-xl">
    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title text-xl md:text-2l">
        {{ props.title }}
        <div class="badge badge-accent text-stone-50">NEW</div>
      </h2>
      <p class="text-base md:text-lg">ISBN: {{ props.isbn }}</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
