<template>
    <div class="app-input-pass">
        <input
            :id="name ? name: id"
            :value="value"
            class="app-input-pass__input"
            :class="(errors.length > 0 && value) ? 'app-input-pass__input--invalid' : ''"
            :type="passwordHidden ? 'password' : 'text'"
            autocomplete="off"
            :placeholder="label"
            @input="$emit('input', $event.target.value)"
        >
        <label class="app-input-pass__input-label" :for="name ? name: id">{{ label }}</label>
        <span class="app-input-pass__validation-message">{{ errors[0] }}</span>
        <span v-show="value" class="app-input-pass__validation-mark" :class="errors.length ? 'app-input-pass__validation-mark--invalid' : 'app-input-pass__validation-mark--valid' "></span>
        <span class="app-input-pass__password-input-mode-button"
              :class="{
                  'app-input-pass__password-input-mode-button--hide': passwordHidden,
                  'app-input-pass__password-input-mode-button--shifted': value
              }"
              @click="passwordHidden = !passwordHidden"
        ></span>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        errors: {
            type: Array,
            default: () => [],
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    data: () => ({
        passwordHidden: true,
    }),
    computed: {
        valueInLowerCase() {
            return _.toLower(this.value);
        },

        optionsFiltered() {
            if (!this.value || this.value.length < 2) {
                return [];
            }

            return _.filter(this.options, option => _.includes(_.toLower(option), this.valueInLowerCase))
                .slice(0, 5);
        },
    },
};
</script>

<style lang="scss">
.app-input-pass {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: $Montserrat;

    &:hover {
        .app-input-pass__input-label {
            color: $color_black1;
        }

        .app-input-pass__input {
            border-color: $color_black1;
        }
    }

    &__input-label {
        position: absolute;
        top: 16px;
        left: 0;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        color: $color_gray2;
        transition: all 0.2s ease-in-out;
        pointer-events: none;
    }

    &__input {
        width: 100%;
        padding: 17px 58px 15px 0;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        border: none;
        border-bottom: 1px solid $color_gray2;

        &::placeholder {
            color: transparent;
        }

        &:focus {
            + .app-input-pass__input-label {
                top: 0;
                left: 0;
                font-size: 10px;
                line-height: 12px;
            }
        }

        &:not(:placeholder-shown) {
            + .app-input-pass__input-label {
                top: 0;
                left: 0;
                font-size: 10px;
                line-height: 12px;
            }
        }

        &--invalid:not(:placeholder-shown) {
            border-bottom: 1px solid $color_red;
        }
    }

    &__validation-message {
        position: absolute;
        bottom: -17px;
        left: 0;
        display: block;
        font-size: 12px;
        line-height: 15px;
        font-weight: 500;
        color: $color_red;
        transition: all 0.2s ease-in-out;
    }

    &__validation-mark {
        position: absolute;
        top: 18px;
        right: 0;
        display: none;
        width: 13px;
        height: 13px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transition: all 0.2s ease-in-out;

        &--invalid {
            display: block;
            background-image: url('/img/red-cross.svg');
        }

        &--valid {
            display: block;
            background-image: url('/img/green-tick.svg');
        }
    }

    &__password-input-mode-button {
        position: absolute;
        top: 14px;
        right: 0;
        display: block;
        width: 20px;
        height: 20px;
        background-image: url('/img/visibility-hide.svg');
        background-size: contain;
        transition: all 0.2s ease-in-out;
        cursor: pointer;


        &--hide {
            background-image: url('/img/visibility.svg');
        }

        &--shifted {
            right: 32px;
        }
    }
}
</style>
