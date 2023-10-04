<template>
    <header class="header">
        <Container>
            <router-link to="/">
                <Logo/>
            </router-link>
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
    z-index: 100;
}
</style>