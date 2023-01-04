<script setup>
import InputVue from "../components/Input.vue";
import FileInputVue from "../components/File_Input.vue";
import TextAreaVue from "../components/Text_Area.vue";
import SelecterVue from "../components/Selecter.vue";

const FormInput = ["Title", "ISBN", "Author", "Publisher", "Price", "Category"];
const Type = ["manga", "novel"];
const Category = ["action", "adventure", "comedy", "drama", "fantasy", "horror", "mystery", "romance", "sci-fi", "slice of life", "thriller"];
</script>

<template>
  <div class="grid grid-cols-1 justify-items-start m-10">
    <form action="#" method="get">
      <h1 class="font-bold text-xl">Book Information</h1>
      <div
        class="grid lg:grid-cols-2 gap-y-10 place-items-center m-8 p-3"
      >
        <InputVue v-for="input in FormInput" :title="input" />
        <SelecterVue title="Type" :detail="Type" />
        <SelecterVue title="Category" :detail="Category" />
        <TextAreaVue title="Description" />
        <br>
        <FileInputVue title="Cover" />
        <br />
        <div class="form-control w-full max-w-xs px-5">
          <input type="submit" value="Submit" class="btn" />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
