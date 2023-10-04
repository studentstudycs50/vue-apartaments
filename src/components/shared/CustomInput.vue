<template>
    <div class="wrapper-input">
        <input 
        @blur="blurHandler"
        v-on="listeners" 
        v-bind="$attrs"
        :value="value"
        class="custom-input" 
        :class="!isValid && 'custom-input--error'">
        <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
    </div>
</template>

<script>
    export default {
        name: 'CustomInput',
        data() {
            return {
                isValid: true,
                error: '',
                isFirstInput: true,
            }
        },
        inject: {
            form: {
                default: null
            }
        },
        inheritAttrs: false,
        props: {
            value: {
                type: String,
                default: ''
            },
            errorMessage: {
                type: String,
                default: ''
            },
            rules: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: event => this.$emit('input', event.target.value)
                }
            }
        },
        watch: {
            value() {
                if(this.isFirstInput) return;
                this.validate();
            }
        },
        mounted() {
            if(!this.form)  return

            this.form.registerInput(this);
        },
        beforeDestroy() {
            if(!this.form)  return

            this.form.unRegisterInput(this);
        },
        methods: {
            validate() {
                this.isValid = this.rules.every((rule) => {
                    const { hasPassed, message } = rule(this.value);

                    if(!hasPassed) {
                        this.error = message || this.errorMessage
                    }

                    return hasPassed
                })
                
                return this.isValid;
            },
            blurHandler() {
                if(this.isFirstInput) {
                    this.validate();
                }
                this.isFirstInput = false
            },
            reset() {
                this.isFirstInput = true;
                this.isValid = true;
                this.$emit('input', '');
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.custom-input {
    border: 2px solid $main-color;
    font-size: 18px;
    line-height: inherit;
    min-height: 40px;
    outline: none;
    min-width: 220px;
    padding: 8px 15px;
    width: 100%;

    &::placeholder {
        color: inherit;
    }

    &--error {
        border-color: red;
    }

    &__error {
        color: red;
        font-size: 12px;
        line-height: 1.2;
        position: absolute;
        right: 0;
        top: 100%;
        width: 100%;
    }
}

.wrapper-input {
    display: inline-flex;
    position: relative;
}
</style>