<template>
  <div class="base-spinner" v-if="showSppiner">
    <font-awesome-icon :icon="['fa', 'circle-notch']" />
  </div>
</template>

<script>
export default {
  name: 'BaseSpinner',
  data () {
    return {
      showSppiner: false
    }
  },
  methods: {
    alternateSpinner () {
      this.showSppiner = !this.showSppiner
    }
  },
  created () {
    this.$root.$on('Spinner::Show', this.alternateSpinner)
  }
}
</script>

<style scoped>
.base-spinner {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

}

.base-spinner svg {
  font-size: 3rem;
  animation: rotate 2s linear infinite;
  color: var(--expense-white);
}

@keyframes rotate {
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
</style>
