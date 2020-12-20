<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center mt-10 text-center"
  >
    <div class="section mb-10 md:mb-0">
      <img class="landing-image hidden md:block" :src="logo" />
    </div>
    <div
      class="text-gray-900 section bg-white py-5 md:py-20 px-5 rounded-lg mb-10 md:mb-0 content"
      :class="{ 'content-leave': started }"
    >
      <img class="landing-image md:hidden block" :src="logo" />
      <h1 class="text-4xl md:text-5xl font-bold my-5 text-primary name">
        {{ greeting }}
      </h1>
      <p class="my-8">
        I'm <span class="text-primary">Akinator</span>, your best guessing
        genie.
      </p>
      <p class="my-8">
        Think about a real or fictional character. I will try to guess who it
        is.
      </p>
      <button
        class="bg-primary py-3 px-5 rounded-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        @click="handleStart"
      >
        <span class="text-gray-100 font-bold"> Click Here to Start </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes loom {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 100;
    transform: translateY(0);
  }
}

@keyframes word-shake {
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(10px);
  }
}

@keyframes slideOut {
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

.section {
  width: 45%;
}
.landing-image {
  width: 75%;
  animation: loom 8s 2s infinite linear;
}
.content {
  animation: slideIn 1s ease-in-out;
}

.content-leave {
  animation: slideOut 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  overflow: hidden;
}

.name {
  animation: word-shake 0.2s linear;
  animation-iteration-count: 8;
  animation-delay: 1s;
}

@media (max-width: 768px) {
  .section {
    width: 100%;
  }
  .landing-image {
    margin: 0 auto;
  }
}
</style>

<script>
export default {
  data() {
    return {
      logo: require('../assets/img/logo2.png'),
      greets: ['Hey Genius 👀', 'Yo!! 🤘', 'Hi Lovely 😊'],
      started: false,
    }
  },
  computed: {
    greeting() {
      const rand =
        Math.round(Math.random() * this.greets.length) % this.greets.length
      return this.greets[rand]
    },
  },
  methods: {
    handleStart() {
      this.started = true
      setTimeout(() => {
        this.$router.push('play')
      }, 1000)
    },
  },
}
</script>
