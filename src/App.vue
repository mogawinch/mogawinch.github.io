<template>
  <div id="app">
    <Maintenance msg="Coming Soon."/>
    <Footer/>
  </div>
</template>

<script>
import Maintenance from './components/Maintenance.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Maintenance,
    Footer
  }
}
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
}
body {
  background-image: linear-gradient(to right bottom, #eacda3 49.9%, #d6ae7b 50.1%);
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #18110e;
  margin-top: 100px;
  width: 100%;
  min-height: calc(100vh - 100px);
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 1fr 0fr;
}
</style>
