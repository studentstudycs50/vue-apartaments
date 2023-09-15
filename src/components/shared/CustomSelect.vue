<template>
    <select v-on="listeners" class="custom-select">
        <option 
        v-for="item in formatedItems" 
        :key="item.value"
        :value="item.value"
        :selected="item.selected"
        >{{ item.label }}</option>
    </select>
</template>

<script>
    export default {
        name: 'CustomSelect',
        props: {
            items: {
                type: Array,
                required: true
            }
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: event => this.$emit('input', event.target.value)
                }
            },
            formatedItems() {
                return this.items.map(item => {
                    return typeof item === 'object'
                    ? item
                    : { value: item, label: item }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.custom-select {
    border: 2px solid $main-color;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    height: 40px;
    outline: none;
    min-width: 220px;
    padding: 8px 15px;
}
</style>