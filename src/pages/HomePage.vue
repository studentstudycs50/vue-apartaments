<template>
  <main class="homePage">
    <SectionWithHeaderSpacer>
      <Container>
        <ApartmentFilterForm 
          class="apartments-filter"
          @submit="filter"
          />
      </Container>
      <Container>
        <p v-if="!filteredApartments.length">Nothing</p>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :id="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
        </ApartmentsList>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>
  
  <script>
  
  import ApartmentsList from '../components/apartment/ApartmentsList.vue';
  import ApartmentsItem from '../components/apartment/ApartmentsItem.vue';
  import ApartmentFilterForm from '../components/apartment/ApartmentFilterForm.vue';
  import Container from '../components/shared/Container.vue';
  import { getApartmentsList } from '../services/apartmens.service';
  import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue';
  
  export default {
    name: 'App',
    components: {
      Container,
      ApartmentsList,
      ApartmentsItem,
      ApartmentFilterForm,
      SectionWithHeaderSpacer
  },
    data() {
      return {
        text: '',
        apartments: [],
        filters: {
          city: '',
          price: 0
        }
      }
    },
    computed: {
      filteredApartments() {
        return this.filterByCityName(this.filterByPrice(this.apartments))
      }
    },
    async created() {
      try {
        const { data } = await getApartmentsList()
        this.apartments = data
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      filter({ city, price }) {
        this.filters.city = city
        this.filters.price = price
      },
      filterByCityName(apartments) {
        if (!this.filters.city) return apartments
  
        return apartments.filter(apartment => {
          return apartment.location.city === this.filters.city
        })
      },
      filterByPrice(apartments) {
        if (!this.filters.price) return apartments
  
        return apartments.filter(apartment => {
          return apartment.price >= this.filters.price
        })
      }
    }
  }
  </script>
  
  <style lang="scss" scoped> 
  .apartments-filter {
    margin-bottom: 40px;
  }
  </style>
  