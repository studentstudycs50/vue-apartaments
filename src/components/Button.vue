<template>
    <button v-on="$listeners" v-bind:type="type" :class="{ btn: true, 'btn--outlined': outlined }">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            type: {
                type: String,
                default: 'button'
            },
            outlined: {
                type: Boolean,
                default: false
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

    &--outlined {
        background-color: #fff;
        border: 1px solid $main-color;
        color: $main-color;
    }
}
</style>