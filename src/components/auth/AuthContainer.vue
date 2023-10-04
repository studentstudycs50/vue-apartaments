<template>
    <div class="auth-container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'AuthContainer'
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.auth-container {
    background-color: $color-white;
    max-width: 410px;
    padding: 30px;
    width: 100%;
}
</style>