<template>
    <AuthContainer class="registration">
        <MainTitle class="registration__title">Registration</MainTitle>
        <Form ref="form" class="registration__form" @submit.prevent="handleSubmit">
            <CustomInput 
                autocomplete="username"
                class="registration__input" 
                v-model="formData.name" 
                name="name" 
                :rules="nameRules"
                placeholder="Name"
                />
            <CustomInput 
                autocomplete="email"
                class="registration__input" 
                v-model="formData.email" 
                name="email" 
                :rules="emailRules"
                placeholder="Email"
                />
            <CustomInput 
                autocomplete="current-password"
                class="registration__input" 
                v-model="formData.password" 
                name="password" 
                :rules="passwordRules"
                placeholder="Password"
                type="password"
                />
            <CustomInput 
                autocomplete="current-password"
                class="registration__input" 
                v-model="formData.confirmPassword" 
                name="password" 
                :rules="confirmPassword"
                placeholder="Confirm password"
                type="password"
                />
            <Button class="registration__btn" type="submit" :loading="loading">Log In</Button>
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
        name: 'RegistrationForm',
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
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }
            }
        },
        computed: {
            rules() {
                return {
                    emailValidation, 
                    passwordValidation, 
                    isRequired,
                }
            },
            nameRules() {
                return [this.rules.isRequired]
            },
            emailRules() {
                return [this.rules.isRequired, this.rules.emailValidation]
            },
            passwordRules() {
                return [this.rules.isRequired, this.rules.passwordValidation]
            },
            confirmPassword() {
                return [(value) => ({
                    hasPassed: value === this.formData.password,
                    message: 'Password is not the same'
                })]
            }
        },
        methods: {
            ...mapActions('auth', ['registerUser']),
            async handleSubmit() {
                const { form } = this.$refs;
                const isFormValid = form.validate();
                const { name, password, email } = this.formData;

                if(isFormValid) {
                    try {
                        this.loading = true;
                        console.log(this.$store)

                        await this.registerUser({ name, password, email });
                  
                        this.$router.push({ name: 'home-page'});
                        form.reset();
                    } catch (error) {
                        this.$notify({
                            type: 'error',
                            title: 'Error happened',
                            text: error.message
                        })
                    } finally {
                        this.loading = false;
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.registration {
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