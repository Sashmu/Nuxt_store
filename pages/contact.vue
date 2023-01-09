<template>
  <div class="h-screen w-full flex justify-center items-center">
    <div
      class="bg-[#9AD1D4] w-3/4 h-3/4 flex flex-col justify-center rounded-lg"
    >
      <h1 class="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <div class="w-full max-w-md mx-auto">
        <form class="bg-[#3BADBA] shadow-md rounded-lg p-6 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-100 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-100 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-100 text-sm font-bold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-[#CCDBDC] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<style lang="scss" scoped></style>
