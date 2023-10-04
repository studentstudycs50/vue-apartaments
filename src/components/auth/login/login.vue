<template>
    <AuthContainer class="login">
        <MainTitle class="login__title">Log in</MainTitle>
        <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
            <CustomInput 
                autocomplete="email"
                class="login__input" 
                v-model="formData.email" 
                name="email" 
                :rules="emailRules"
                placeholder="Email"
                />
            <CustomInput 
                autocomplete="current-password"
                class="login__input" 
                v-model="formData.password" 
                name="password" 
                :rules="passwordRules"
                placeholder="Password"
                type="password"
                />
            <Button class="login__btn" type="submit" :loading="loading">Log In</Button>
        </Form>
    </AuthContainer>
</template>

<script>
import Form from '../../shared/form/form.vue';
import CustomInput from '../../shared/CustomInput.vue';
import Button from '../../Button.vue';
import { emailValidation, passwordValidation, isRequired } from '../../../utils/validationRules';
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '../../shared/MainTitle.vue';
import { mapActions } from 'vuex';

    export default {
        name: 'LoginForm',
        components: {
            Form,
            CustomInput,
            Button,
            AuthContainer,
            MainTitle
        },
        data() {
            return {
                loading: false,
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
            rules() {
                return {
                    emailValidation, 
                    passwordValidation, 
                    isRequired 
                }
            },
            emailRules() {
                return [this.rules.isRequired, this.rules.emailValidation]
            },
            passwordRules() {
                return [this.rules.isRequired]
            },
        },
        methods: {
            ...mapActions('auth', ['login']),
            async handleSubmit() {
                const { form } = this.$refs;
                const isFormValid = form.validate();

                if(isFormValid) {
                    try {
                        this.loading = true;
                        await this.login(this.formData);
                        
                        this.$router.push({ name: 'home-page'});
                        form.reset();
                    } catch (error) {
                        this.$notify({
                            type: 'error',
                            title: 'Error happened',
                            text: error.message
                        })
                    } finally {
                        this.loading = false
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>