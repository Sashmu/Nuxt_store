<template>
  <div class="container">
    <div class="card">
      <p class="errorMsg">Error : {{ error.statusCode }}</p>
      <p class="font-semibold text-xl">Oooops...</p>
      <p class="errorMsg">{{ error.message }}</p>
    </div>
    <button @click="homeHandler" class="homeButton">Go To home</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const homeHandler = () => {
  clearError({ redirect: "/" });
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  background-color: rgb(246, 191, 191);
  width: 400px;
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 10rem;
  box-shadow: 5px 5px 5px rgba(246, 191, 191, 0.5);
}

.errorMsg {
  font-size: 2rem;
  font-weight: 600;
}

.homeButton {
  background-color: #a2dbe2;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  filter: drop-shadow(0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.1));
  /* filter:drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1)); */
}
</style>
