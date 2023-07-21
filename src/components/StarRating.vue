<template>
    <div class="star-rating">
        <span v-for="index in starLimit" :key="index" class="star star--outlined"></span>
    <div class="star-rating__colored" :style="ratingWidthStyle">
        <span v-for="index in starLimit" :key="index" class="star star--colored"></span>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'StarRating',
        props: {
            rating: {
                type: Number,
                default: 0
            },
            starLimit: {
            type: Number,
            default: 5
            }
        },
        computed: {
            ratingWidth() {
                return this.rating / this.starLimit * 100
            },
            ratingWidthStyle() {
                return `width: ${this.ratingWidth}%;`
            }
        }
    }
</script>

<style lang="scss" scoped>
.star-rating {
    display: inline-flex;
    position: relative;

    &__colored {
        display: inline-flex;
        height: 100%;
        left: 0;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 0;
    }
}
.star {
    display: inline-block;
    flex-shrink: 0;
    height: 16px;
    margin: 0 3px;
    width: 16px;
    &--colored {
        background: url('../../public/img/star-yellow.svg') center no-repeat;
    }
    &--outlined {
        background: url('../../public/img/star-outlined.svg') center no-repeat;;
    }
}
</style>