<template>
    <article class="apartment-main-info">
        <div class="apartment-main-info__heading">
            <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
            <StarRating :rating="apartment.rating" />
        </div>
        <img :src="apartment.imgUrl" :alt="apartment.title" class="apartment-main-info__photo">
        <p class="apartment-main-info__description">{{ apartment.descr }}</p>
    </article>
</template>

<script>
import StarRating from '../StarRating.vue';

    export default {
        name: 'ApartmentsMainInfo',
        components: {
            StarRating
        },
        props: {
            apartment: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
.apartment-main-info {
    &__heading {
        display: flex;
    }

    &__title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        margin-right: 20px;
        text-transform: capitalize;
    }

    &__photo {
        max-width: 100%;
    }

    &__description {
        line-height: 1.3;
        margin-top: 30px;
    }
}
</style>