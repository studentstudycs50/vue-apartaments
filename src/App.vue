<template>
  <div :id="$style.app">
    <ApartmentsList :items="apartaments" />
  </div>
</template>

<script>

import ApartmentsList from './components/apartment/ApartmentsList.vue';
import apartaments from './components/apartment/apartaments';

export default {
  name: 'App',
  components: {
    ApartmentsList
},
  data() {
    return {
      apartaments,
      apartments: {
        id: 'mlmlkmkml8239904',
        title: 'Lommkmkmk lkmkm lkm;l mkpo',
        description: 'Lommkmkmk lkmkm lkm;l mkpo Lommkmkmk lkmkm lkm;l mkpo Lommkmkmk lkmkm lkm;l mkpo',
        price: 2032,
        rating: 4.7,
        location: {
          city: 'Kharkiv'
        },
        owner: {
          name: 'Svitlana',
          phone: '123-123-1233',
          email: 'mklmk@gmail.com',
        }
      }
    }
  }
}
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
