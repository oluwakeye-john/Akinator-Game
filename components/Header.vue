<template>
  <Container>
    <div class="py-5 text-gray-100">
      <h4 class="text-xl p-0 flex items-center text-xl">
        <nuxt-link to="/"> <span class="text-4xl">â</span>kinator </nuxt-link>
      </h4>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      logo: require('../assets/img/logo.png'),
    }
  },
})
</script>
