<template>
    <section class="reviews">
        <div class="reviews__heading">
            <h2 class="reviews__title">Total rating</h2>
            <div class="reviews__rating">
                <span>{{ amountOfReviews }} review(s)</span>
                <StarRating :rating="totalRating" />
                </div>
        </div>
        <ReviewsItem 
        v-for="review in currentReviews"
        :key="review.author"
        :rewiew="review"
        />
        <button @click="toggleReviews" class="reviews__show-more">{{ buttonText }} </button>  
    </section>
</template>

<script>
import ReviewsItem from './reviews-item/ReviewsItem.vue';
import StarRating from '../StarRating.vue';
    export default {
        name: 'Reviews',
        components: {
            ReviewsItem,
            StarRating
        },
        props: {
            reviews: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                reviewsLimit: 2
            }
        },
        computed: {
            totalRating() {
               const total = this.reviews.reduce((acc, review) => acc + review.rating, 0);
               return total / this.reviews.length
            },
            amountOfReviews() {
                return this.reviews.length
            },
            currentReviews() {
                return this.reviews.slice(0, this.reviewsLimit)
            },
            buttonText() {
                return this.reviewsLimit === this.reviews.length
                ? 'Hide'
                : 'Show more'
            }
        },
        methods: {
            toggleReviews() {
                if (this.reviewsLimit === this.reviews.length) {
                    this.reviewsLimit = 2;
                    return
                } this.reviewsLimit = this.reviews.length
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.reviews {
    background-color: $color-2--1;
    margin-top: 20px;
    padding: 0 2px;

  &__heading {
    padding: 20px 20px 10px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  &__rating {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &__show-more {
    background-color: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
    padding: 12px;
    width: 100%;
  }
}
</style>