<template>
    <div class="container">
        <slot>Default value</slot>
    </div>
</template>
<script>
    export default {
        name: 'Container'
    }
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    max-width: 1110px;
}
</style>