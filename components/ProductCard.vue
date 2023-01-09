<template>
   

    <div @click="handleProductDetail" class="flex flex-col bg-white rounded-xl shadow-xl cursor-pointer hover:scale-105 transition-transform ease-in" >
  <div class="bg-white h-40 w-full rounded-t-xl pt-2.5">
    <img :src="product.image" alt="Card image" class="h-full w-full object-contain ">
  </div>
  <div class="p-6">
    <h3 class="text-sm lg:text-xl font-semibold  text-gray-700 mb-2">  {{product.title}} <span>- ${{product.price }}</span></h3>
    <p class="text-gray-600 text-xs truncate">{{product.description}}</p>
  </div>
</div>

</template>

<script setup>

const {product} =defineProps(['product'])

const handleProductDetail=()=>{
  navigateTo(`/products/${product.id}`)
}
</script>

<style lang="scss" scoped>

</style>