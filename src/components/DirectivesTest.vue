<template>
    <div v-if="isVisible">
        <h1>Title Directives</h1>
        <ul>
            <template v-for="fruit in fruits">
                <li v-if="fruit === 'kivi'" :key="fruit">{{ fruit }}</li>
            </template>
        </ul>
        <ul>
            <li v-for="car in cars" :key="car.color">{{ car.color }}</li>
            <!-- вывести ключ -->
            <li v-for="(car, key) in cars" :key="key">{{ key }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'DirectivesTest',
        data() {
            return {
                isVisible: true,
                fruits: ['kivi', 'apple', 'peach'],
                cars: {
                    audi: {
                        color: 'red'
                    },
                    bmw: {
                        color: 'blue'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>