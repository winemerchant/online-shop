<template>
  <div id="app">
    <os-main-wrapper/>
  </div>
</template>

<script>
import osMainWrapper from './components/os-main-wrapper.vue'

export default {
  name: 'App',
  
  components: {
    osMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
