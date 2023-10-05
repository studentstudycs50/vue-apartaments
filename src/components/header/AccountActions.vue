<template>
    <div class="account-actions" @mouseover="open" @mouseleave="close">
        <button @click="toggle" class="account-actions__btn">
            <span class="account-actions__text">Profile</span>
            <svg
                class="account-actions__icon"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M8 0C5.38286 0 3.25391 2.12896 3.25391 4.74609C3.25391 7.36323 5.38286 9.49219 8 9.49219C10.6171 9.49219 12.7461 7.36323 12.7461 4.74609C12.7461 2.12896 10.6171 0 8 0Z"
            />
            <path
                d="M15.8216 14.0161C14.4028 11.8877 12.0282 10.6172 9.4708 10.6172H6.5292C3.9718 10.6172 1.5972 11.8877 0.178438 14.0161L0.0898438 14.1489V18H15.9102H15.9102V14.1489L15.8216 14.0161Z"
            />
            </svg>
        </button>
        <ul v-show="isOpen" class="account-actions__list">
            <li class="account-actions__item">
                <router-link class="account-actions__link" :to="{ name: 'my-orders'}">My orders</router-link>
            </li>
            <li class="account-actions__item">
                <button @click="handleLogOut" class="account-actions__logout">Logout</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name: 'AccountActions',
        data() {
            return {
                isOpen: false,
            };
        },
        methods: {
            ...mapActions('auth', ['logOut']),
            open() {
                this.isOpen = true;
            },
            close() {
                this.isOpen = false;
            },
            toggle() {
                this.isOpen = !this.isOpen;
            },
            async handleLogOut() {
              try {
                await this.logOut()
                
                const { requiresAuth } = this.$route.meta;

                if (requiresAuth) {
                this.$router.push({ name: 'login-page' });
              }
              } catch (error) {
                this.$notify({
                    type: 'error',
                    title: 'Something went wrong',
                    message: error.message
                })
              }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.account-actions {
  color: $color-white;
  display: inline-flex;
  padding: 5px 0;
  position: relative;

  &__btn {
    align-items: center;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: 16px;
    padding: 0;
    transition: color 0.4s;

    &:hover {
      color: $main-color;
    }
  }

  &__text {
    margin-right: 5px;
  }

  &__icon {
    fill: currentColor;
    height: 18px;
    transition: fill 0.4s;
    width: 16px;
  }

  &__list {
    background: $color-white;
    border: 1px solid $secondary-color;
    color: $color-black;
    padding: 15px;
    position: absolute;
    right: 0;
    top: 100%;
    width: 150px;
  }

  &__item {
    margin-bottom: 5px;
    transition: color 0.4s;

    &:hover {
      color: $main-color;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
  }

  &__logout {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    padding: 0;
  }
}
</style>