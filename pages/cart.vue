<template>

    <div class=" w-full flex flex-col items-center mt-20">
         <h1 class="text-xl "> Products in cart :</h1> 
        <ul>
            <li  class="list-decimal" v-for="i in inCart"> {{i.p_name}} - {{ i.p_qty }}</li>
        </ul>
    </div>
</template>

<script setup>

const inCart=itemsInCart()
console.log(inCart.value)

</script>