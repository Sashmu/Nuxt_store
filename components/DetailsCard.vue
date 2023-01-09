<template>

<div class="flex justify-center  ">
    <div class="flex flex-col pt-2 rounded-lg shadow-xl  bg-white border border-[#a6eaf1] border-opacity-50  overflow-hidden">
  <div class=" h-72 pb-4 ">
    <img :src="selected.image" alt="Card image" class="h-full w-full object-contain">
  </div>
  <div class="p-6 bg-[#a6eaf1]">
    <h3 class="text-2xl font-bold text-gray-800 mb-2">{{selected.title}} <span>- ${{selected.price }}</span></h3>
    <div class="flex items-center mb-2">
      <div class="text-2xl text-yellow-500 mr-2">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <span class="text-gray-700 text-lg"> Ratings : <span class="font-semibold">{{selected.rating.rate}}</span> ({{selected.rating.count}} reviews)</span>
    </div>
    <p class="text-gray-600 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>

  <Quantity :selected="selected"/>


  </div>
</div>
</div>
</template>


<script  setup>

const {selected} = defineProps(['selected'])



</script>