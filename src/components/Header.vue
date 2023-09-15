<template>
    <header class="header">
        <Container>
            <Logo/>
        </Container>
    </header>
</template>

<script>
import Logo from './Logo.vue';
import Container from './shared/Container.vue';
    export default {
        name: 'Header',
        components: {
    Container,
    Logo
}
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.header {
    background-color: $secondary-color;
    left: 0;
    padding: 15px 0;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>