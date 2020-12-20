<template>
  <Container>
    <div class="justify-center items-center my-10">
      <div class="bg-white card rounded-lg p-10 text-center">
        <img :src="logo" class="w-20 mx-auto md:block" />
        <div class="my-6">
          <div v-if="error">
            <p class="text-2xl mt-10 mb-2">Ouch...</p>
            <p class="text-sm mb-5">An error occured</p>
            <Button text="Play Again" @click="reset" />
          </div>
          <div v-else-if="finished">
            <img class="guess-img rounded" :src="guess.absolute_picture_path" />
            <p class="text-2xl mt-10 mb-2">{{ guess.name }}</p>
            <p class="text-sm mb-5">{{ guess.description }}</p>
            <Button text="Start Again" @click="reset" />
          </div>
          <div v-else-if="!fetching">
            <div>
              <p class="text-primary text-md">
                {{ akinator.currentStep + 1 }}. {{ akinator.question }}
              </p>
            </div>
            <div class="mt-10 md:mt-5">
              <Button
                v-for="(answer, index) in akinator.answers"
                :key="index"
                :text="answer"
                @click="handleAnswer(index)"
              />
            </div>
          </div>
          <div v-else>
            <Spinner />
          </div>
          <!-- <Button text="Back" />
          <Button text="Quit" /> -->
        </div>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Aki } from 'aki-api'
export default Vue.extend({
  data() {
    return {
      logo: require('../assets/img/logo2.png'),
      akinator: new Aki('en'),
      fetching: true,
      finished: false,
      guess: {},
      error: false,
    }
  },
  created() {
    this.begin()
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? you haven't finished your game!"
    )
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
  methods: {
    async begin() {
      try {
        this.error = false
        this.finished = false
        this.guess = {}
        this.fetching = true
        await this.akinator.start()
        this.fetching = false
      } catch {
        this.error = true
        this.fetching = false
      }
    },
    reset() {
      this.akinator = new Aki('en')
      this.begin()
    },
    async handleAnswer(val: number) {
      try {
        this.fetching = true
        await this.akinator.step(val)
        if (this.akinator.progress > 80) {
          await this.akinator.win()
          this.guess = this.akinator.answers[0]
          this.finished = true
          return
        }
        this.fetching = false
      } catch {
        this.error = true
        this.fetching = true
      }
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
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
</style>
