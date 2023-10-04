<template>
    <button 
        v-on="$listeners" 
        v-bind:type="type" 
        :disabled="loading"
        :class="{ btn: true, 'btn--outlined': outlined }"
        >
        <CircleLoader v-if="loading" width="35" height="35" class="btn__loader" />
        <span class="btn__content" :class="contentStyle">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    import  CircleLoader from './loaders/CircleLoader.vue';
    export default {
        name: 'Button',
        components: {
            CircleLoader
        },
        props: {
            type: {
                type: String,
                default: 'button'
            },
            outlined: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            contentStyle() {
                return {
                    'btn__content--hidden': this.loading
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.btn {
    background-color: $main-color;
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    min-width: 220px;
    padding: 8px 15px;
    position: relative;

    &--outlined {
        background-color: #fff;
        border: 1px solid $main-color;
        color: $main-color;
    }

    &__content {
        &--hidden {
            opacity: 0;
        }
    }

    &__loader {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
}
</style>