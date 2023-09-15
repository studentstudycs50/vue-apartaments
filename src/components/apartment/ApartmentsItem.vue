<template>
    <div class="apartments-item" @click="log">
        <div class="apartments-item__inner">
            <img :src="imgSrc" alt="" class="apartments-item__photo"/>
            <div class="apartments-item__content">
                <p class="apartments-item__description">{{ descr }}</p>
                <div class="apartments-item__rating">
                    <StarRating :rating="rating" />
                </div>
                <div class="apartments-item__price">UAH {{ price }}</div>
                <router-link :to="{ name: 'apartment', params: { id } }" class="apartments-item__link"></router-link>
            </div>
        </div>
    </div>
</template>

<script>

import StarRating from "../StarRating"

    export default {
        name: 'ApartmentsItem',
        components: {
            StarRating
        },
        props: {
            id: {
                type: String,
                required: true
            },
            descr: {
                type: String,
                default: ''
            },
            rating: {
                type: Number,
                default: 0
            },
            price: {
                type: Number,
                required: true
            },
            imgSrc: {
                type: String,
                default: ''
            }
        },
        methods: {
            log() {
                console.log('clicked');
            }
        }
    }
</script>

<style lang="scss" scoped>
.apartments-item {
    margin-bottom: 30px;
    padding: 0 15px;
    position: relative;
    width: 33.333%;
    &__inner {
        position: relative;
    }

    &__content {
        background-color: rgba(#0f1d2d, 0.7);
        color: #fff;
        cursor: pointer;
        line-height: 1.4;
        min-height: 200px;
        opacity: 0;
        padding: 20px;
        position: relative;
        text-align: left;
        transition: opacity 0.4s;
        z-index: 1;

        &:hover {
            opacity: 1;
        }
    }

    &__description {
        margin-bottom: 20px;
        max-height: calc(1em * 1.4 * 4);
        overflow: hidden;
    }

    &__rating {
        margin-bottom: 20px;
    }

    &__price {
        font-size: 20px;
        font-weight: 600;
    }
    
    &__photo {
        height: 100%;
        left: 0;
        object-fit: cover;
        position: absolute;
        top: 0;
        width: 100%;
    }

    &__link {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
}
</style>