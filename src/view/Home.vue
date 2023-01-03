<script setup>

import BookList from "../components/BookList.vue";

const books = [
  {
    title: "The Hobbit",
    isbn: "9780547928227",
  },
  {
    title: "The Fellowship of the Ring",
    isbn: "9780547928227",
  },
  {
    title: "The Two Towers",
    isbn: "9780547928227",
  },
  {
    title: "The Return of the King",
    isbn: "9780547928227",
  },
  {
    title: "The Silmarillion",
    isbn: "9780547928227",
  },
  {
    title: "The Children of Hurin",
    isbn: "9780547928227",
  },
  {
    title: "Unfinished Tales",
    isbn: "9780547928227",
  },
  {
    title: "The History of Middle-earth",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
  {
    title: "The Lord of the Rings",
    isbn: "9780547928227",
  },
];
</script>

<template>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 place-items-center m-8"
    >
      <BookList
        v-for="book in books"
        :key="book.isbn"
        :title="book.title"
        :isbn="book.isbn"
      />
    </div>
</template>

<style scoped></style>
