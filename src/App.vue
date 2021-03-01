<template>
  <div id="app">
    <div class="main-content">
      <router-view :key="$route.name" class="router-view" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
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
</style>
