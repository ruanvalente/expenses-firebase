<template>
  <div id="app">
    <base-spinner />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import BaseSpinner from '@/components/BaseSpinner'
export default {
  name: 'App',
  components: {
    BaseSpinner
  },
  created () {
    this.$root.$emit('Spinner::Show')
    console.log(this.$firebase)
  }
}
</script>

<style>
:root {
  --expense-dark: #161925;
  --expense-white: #FDFFFC;
  --expense-blue: #235789;
  --expense-red: #C1292E;
  --expense-yellow: #F1D302;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

body, html, #app {
  height: 100vh;
}

body, input, button {
  font-size: 16px;
  font-family: Roboto, sans-serif;
}

body {
  background: var(--expense-yellow);
  --webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
  z-index: 11;
}
</style>
