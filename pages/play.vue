<template>
  <Container>
    <div class="justify-center items-center mt-10">
      <div class="bg-white card rounded-lg p-10 text-center">
        <img :src="logo" class="w-20 mx-auto" />
        <div class="my-6">
          <p class="text-primary text-md">1. Is your character real?</p>
        </div>
        <div>
          <Button text="Yes" />
          <Button text="No" />
          <Button text="Don't know" />
          <Button text="Probably" />
          <Button text="Probably not" />
        </div>
      </div>
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

<style scoped>
.card {
  width: 50%;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
</style>
