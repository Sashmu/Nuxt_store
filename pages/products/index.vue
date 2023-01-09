<template>
  <div
    class="h-screen grid grid-cols-4 gap-5 px-20 pt-10 overflow-y-scroll bg-[#99d1d7]"
  >
    <ProductCard v-for="p in products.api" :key="p.id" :product="p" />
  </div>
</template>

<script setup>

useHead({
  title: "Nuxt Store | Merch",
  meta: [{ name: "description", content: "Nuxt3 Merch" }],
});

const { data: products } = await useFetch("/api/getProducts");
</script>

<style lang="scss" scoped></style>
>
