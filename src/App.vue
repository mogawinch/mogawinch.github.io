<template>
  <div id="app">
    <Navbar/>
    <div class="main-content">
      <router-view :key="$route.name" class="router-view" />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #fff;
  background-size: cover;
}
</style>
