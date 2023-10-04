<template>
    <section class="apartments-owner">
        <h2 class="apartments-owner__title">Informstion about owner</h2>
        <p class="apartments-owner__name">name: {{ owner.name }}</p>
        <p class="apartments-owner__phone">tel: {{ owner.phone }}</p>
        <p class="apartments-owner__email">e-mail: {{ owner.email }}</p>
    </section>
</template>

<script>
    export default {
        name: 'ApartmentsOwner',
        props: {
            owner: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.apartments-owner {
    background-color: $color-2--1;
    font-weight: 400;
    min-width: 350px;
    padding: 20px;

    &__title {
        font-size: 18px;
        font-weight: bold;
    }

    &__name,
    &__phone, 
    &__email {
        margin-top: 6px;
    }
}
</style>