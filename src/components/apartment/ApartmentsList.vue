<template>
    <Container>
        <slot name="title">Default</slot>
        <div class="apartments-list">
            <template v-for="apartment in items">
                <slot name="apartment" v-bind:apartment="apartment"></slot>
            </template>
        </div>
    </Container>
</template>

<script>
import Container from '../shared/Container.vue'

    export default {
        name: 'ApartmentsList',
        components: {
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