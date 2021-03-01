<template>
  <div id="home">
    <Maintenance msg="Coming Soon."/>
    <Footer/>
  </div>
</template>

<script>
import Maintenance from '@/components/Maintenance.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Maintenance,
    Footer
  }
}
</script>

<style scoped>
#home {
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
