<template>
    <section class="reviews-item">
        <ReviewsHeading
        :rating="rewiew.rating"
        :author="rewiew.author"
        />
        <p class="reviews-item__content">{{ rewiew.content }}</p>
    </section>
</template>

<script>
import ReviewsHeading from './ReviewsHeading.vue';
    export default {
        name: 'ReviewsItem',
        components: {
            ReviewsHeading
        },
        props: {
            rewiew: {
                type: Object,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

.reviews-item {
  background: $color-white;
  line-height: 1.3;
  margin-bottom: 2px;
  padding: 20px 22px;

  &:last-child {
    margin-bottom: 0;
  }

  &__content {
    display: -webkit-box;
    margin-top: 20px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
}
</style>