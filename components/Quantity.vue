<template>
  <div class="w-full flex justify-center items-center mt-6">
    <button @click="incrementQuantity" class="changeQty">+</button>
    <input readonly class="quantity" type="number" v-model="selectedQty" />
    <button
      @click="decrementQuantity"
      :disabled="selectedQty == 0"
      class="changeQty"
    >
      -
    </button>
    <button
      @click="addToCart"
      class="bg-gray-600 text-gray-100 hover:bg-gray-700 px-4 py-2.5 rounded-lg ml-4 cursor-pointer flex"
      :class="{ disabled: selectedQty < 1 }"
    >
      <i class="material-icons mr-2">add_shopping_cart</i>
      <span> Add To Cart</span>
    </button>
  </div>
</template>

<script setup>
const inCart = itemsInCart();
const { selected } = defineProps(["selected"]);

const selectedQty = ref(0);

const incrementQuantity = () => {
  selectedQty.value = selectedQty.value + 1;
};

const decrementQuantity = () => {
  selectedQty.value = selectedQty.value - 1;
  const productinCart = inCart.value.find((e) => e.p_id == selected.id);
  const index = inCart.value.indexOf(productinCart);

  if (selectedQty.value === 0) {
    inCart.value.splice(index, 1);
  }

  inCart.value[index].p_qty--;
};

const addToCart = () => {
  console.log(selectedQty.value);
  console.log(inCart.value);

  if (inCart.value.length > 0) {
    const productExist = inCart.value.find((e) => e.p_id == selected.id);
    const index = inCart.value.indexOf(productExist);
    if (productExist) {
      inCart.value[index].p_qty = selectedQty.value;
    } else {
      inCart.value.push({
        p_id: selected.id,
        p_name: selected.title,
        p_qty: selectedQty.value,
      });
    }
  } else {
    inCart.value.push({
      p_id: selected.id,
      p_name: selected.title,
      p_qty: selectedQty.value,
    });
  }
};
</script>



<style scoped>
.quantity {
  width: 40px;
  height: 30px;
  border-radius: 0.3rem;
  text-align: center;
}

.changeQty {
  background-color: rgba(41, 37, 37, 0.171);
  height: 30px;
  width: 40px;
  font-size: large;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
