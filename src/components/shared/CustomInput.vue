<template>
    <input v-on="listeners" class="custom-input">
</template>

<script>
    export default {
        name: 'CustomInput',
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: event => this.$emit('input', event.target.value)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.custom-input {
    border: 2px solid $main-color;
    font-size: 18px;
    line-height: inherit;
    min-height: 40px;
    outline: none;
    min-width: 220px;
    padding: 8px 15px;

    &::placeholder {
        color: inherit;
    }
}
</style>