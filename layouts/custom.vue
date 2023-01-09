<template>
  <header>
    <nav class="nav_container">
      <NuxtLink class="bg-[#9AD1D4] p-2 rounded-md text-black" to="/"> Go To Home</NuxtLink>
    </nav>

  </header>

  <div> <slot/> </div>
  <!-- <footer>
  <ul>
    <li><NuxtLink to="/"> Home</NuxtLink></li>
    <li><NuxtLink to="/about"> About</NuxtLink></li>
    <li><NuxtLink to="/products"> All Products</NuxtLink></li>
  </ul>

</footer> -->
</template>

<style scoped>
.nav_container {
  top: 0px;
  position: sticky;
  background-color: #003249;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
}
</style>
