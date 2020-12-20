<template>
  <button
    class="bg-primary block md:inline-block w-full md:w-auto text-gray-100 font-bold py-3 md:py-2 my-8 md:my-2 mx-0 md:mx-3 px-5 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    style="border-radius: 30px"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
})
</script>
