<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Container',

    }
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    min-width: 1110px;
}
</style>