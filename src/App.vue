<template>
  <div id="app">
    <div class="content">
      <Header />
    <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
}
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  flex-direction: column;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
