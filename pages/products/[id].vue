<template>
  <Head>
    <Title>Product | {{ selected.title }}</Title>
    <Meta name="description" :content="selected.description" />
  </Head>
  <div class="w-screen h-screen bg-[#4ebbc7] pt-20">
    <DetailsCard :selected="selected" />
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

const uri = `https://fakestoreapi.com/products/${id}`;
const { data: selected } = await useFetch(uri, { key: id });

if (!selected.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product Not Available",
    fatal: true,
  });
}
</script>

<style lang="scss" scoped></style>
