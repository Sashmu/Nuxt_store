<template>
  <div class="nav_container">
    <div class="left_nav">
      <NuxtLink to="/"> Nuxt Store</NuxtLink>
      <NuxtLink to="/about"> About</NuxtLink>
      <NuxtLink to="/products"> All Products</NuxtLink>
    </div>
    <div class="right_nav">
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/abc">abc</NuxtLink>
      <NuxtLink to="/cart">Cart ({{totalInCart()}})</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.nav_container {
  top: 0px;
  position: sticky;
  background-color: #003249;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
.left_nav {
  display: flex;
  column-gap: 1rem;
}
.right_nav {
  display: flex;
  column-gap: 1rem;
}

.router-link-exact-active{
    color:#67b9c3;
    font-weight: 700;
}

</style>


<script setup>


const inCart = itemsInCart()


const totalInCart=()=>{
  var result = inCart.value.reduce(function (acc, obj) { return acc + obj.p_qty; }, 0);
  console.log(result)
  return result
}

</script>
