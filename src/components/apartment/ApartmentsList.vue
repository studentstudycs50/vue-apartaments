<template>
    <Container>
        <div class="apartments-list">
            <ApartmentsItem 
            v-for="{ id, descr, rating, imgUrl, price } in items"
            :key="id"
            :descr="descr"
            :rating="rating"
            :imgSrc="`${publicPath}${imgUrl}`"
            :price="price"
            />
        </div>
    </Container>
</template>

<script>
import ApartmentsItem from './ApartmentsItem.vue'
import Container from '../shared/Container.vue'

    export default {
        name: 'ApartmentsList',
        components: {
            ApartmentsItem,
            Container
        },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
            publicPath: process.env.BASE_URL
            }
        }
    }
</script>

<style lang="scss" scoped>
.apartments-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}
</style>