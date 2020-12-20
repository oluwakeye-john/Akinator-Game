<template>
  <Container>
    <div class="justify-center items-center mt-10">
      <div class="bg-white card rounded-lg p-10 text-center">
        <img :src="logo" class="w-20 mx-auto md:block" />
        <div class="my-6">
          <div v-if="finished">
            <img class="guess-img rounded" :src="guess.absolute_picture_path" />
            <p class="text-2xl mt-10 mb-2">{{ guess.name }}</p>
            <p class="text-sm">{{ guess.description }}</p>
          </div>
          <div v-else-if="!fetching">
            <div>
              <p class="text-primary text-md">
                {{ akinator.currentStep + 1 }}. {{ akinator.question }}
              </p>
            </div>
            <div class="mt-10 md:mt-5">
              <Button text="Yes" @click="handleAnswer(0)" />
              <Button text="No" @click="handleAnswer(1)" />
              <Button text="Don't know" @click="handleAnswer(2)" />
              <Button text="Probably" @click="handleAnswer(3)" />
              <Button text="Probably not" @click="handleAnswer(4)" />
            </div>
          </div>
          <div v-else>
            <Spinner />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import akinator from '../api/index'
export default Vue.extend({
  data() {
    return {
      logo: require('../assets/img/logo2.png'),
      akinator: { progress: 0 },
      fetching: false,
      finished: false,
      guess: {},
    }
  },
  async created() {
    this.fetching = true
    const resp: any = await akinator.start()
    this.akinator = resp
    this.fetching = false
  },
  methods: {
    async handleAnswer(val: number) {
      this.fetching = true
      const resp: any = await akinator.step(val)
      this.akinator = resp
      if (this.akinator.progress > 80) {
        this.guess = await akinator.win()
        console.log('win', this.guess)
        this.finished = true
        return
      }
      this.fetching = false
    },
  },
})
</script>

<style scoped>
.guess-img {
  margin: 0 auto;
  height: 200px;
}
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
