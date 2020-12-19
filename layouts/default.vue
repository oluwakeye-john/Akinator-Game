<template>
  <transition enter-active-class="enter" leave-active-class="leave">
    <div class="h-screen">
      <Header />
      <Nuxt />
    </div>
  </transition>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.enter {
  opacity: 0;
}

.leave {
  opacity: 1;
}

body {
  background-color: #9f7aea;
  background-image: url('../assets/img/pattern.svg');
}
</style>
