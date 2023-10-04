<template>
    <section class="auth-section">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: 'AuthSection'
    }
</script>

<style lang="scss" scoped>
.auth-section {
    align-items: center;
    background: {
        image: url('../../assets/img/auth-bg.jpg');
        position: center;
        repeat: no-repeat;
        size: cover;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 30px);
    position: relative;
    z-index: 1;

    &::before {
        background: rgba(15, 29, 45, 0.5);
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
  }
}
</style>