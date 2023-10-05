<template>
    <header class="header">
        <Container>
            <div class="header__content">
                <router-link to="/">
                    <Logo/>
                </router-link>
                <AccountActions v-if="isLoggedIn" />
                <AuthActions v-else />
            </div>
        </Container>
    </header>
</template>

<script>
import Logo from '../Logo.vue';
import Container from '../shared/Container.vue';
import AuthActions from './AuthActions.vue';
import AccountActions from './AccountActions.vue';
import { mapGetters } from 'vuex';

    export default {
        name: 'Header',
        components: {
            Container,
            Logo,
            AuthActions,
            AccountActions
        },
        computed: {
            ...mapGetters('auth', ['isLoggedIn']),
        },
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.header {
    background-color: $secondary-color;
    left: 0;
    padding: 15px 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;

    &__content {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
}
</style>