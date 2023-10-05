<template>
    <main class="my-orders-page">
        <SectionWithHeaderSpacer>
            <Container>
                <section class="my-orders-page__content">
                    <MainTitle>Orders</MainTitle>
                    <OrdersList :items="orders"/>
                </section>
            </Container>
        </SectionWithHeaderSpacer>
    </main>
</template>

<script>
 import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue';
 import Container from '../components/shared/Container.vue';
 import MainTitle from '../components/shared/MainTitle.vue';
 import OrdersList from '../components/my-orders/OrdersList.vue';
 import { getOrders } from '../services/orders.service';

    export default {
        name: 'MyOrdersPage',
        components: {
            SectionWithHeaderSpacer,
            Container,
            MainTitle,
            OrdersList
        },
        data() {
            return {
                orders: []
            }
        },
        async created() {
            try {
                const { data } = await getOrders();
                this.orders = data;
            } catch (error) {
                this.$notify({
                    type: 'error',
                    title: 'Something went wrong',
                    message: error.message
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.my-orders-page {
    &__content {
        margin: 0 auto 100px;
        max-width: 730px;
    }
}
</style>