<template>
    <div class="app-input">
        <input
            :id="customId"
            :value="value"
            class="app-input__input"
            :class="(errors.length > 0 && value) ? 'app-input__input--invalid' : ''"
            type="text"
            autocomplete="off"
            :placeholder="label"
            v-bind="customProperties"
            @input="$emit('input', $event.target.value)"
        >
        <label class="app-input__input-label" :for="customId">{{ label }}</label>
        <span class="app-input__validation-message">{{ errors[0] }}</span>
        <span v-show="value" class="app-input__validation-mark" :class="errors.length ? 'app-input__validation-mark--invalid' : 'app-input__validation-mark--valid' "></span>
        <ul v-if="optionsFiltered.length > 0 && optionsFiltered[0] !== value" class="app-input__input-list">
            <li v-for="(item, i) in optionsFiltered" :key="`${item}${i}`" class="app-input__input-list-item" @click="$emit('input', item)">{{ item }}</li>
        </ul>
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
        inputmode: {
            type: String,
            default: '',
        },
    },
    computed: {
        customId() {
            // eslint-disable-next-line no-underscore-dangle
            return this.name ? this.name + this._uid : this.id;
        },

        customProperties() {
            const result = {};

            if (this.inputmode) {
                result.inputmode = this.inputmode;
            }

            return result;
        },

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
.app-input {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &:hover {
        .app-input__input-label {
            color: $color_black1;
        }

        .app-input__input {
            border-color: $color_black1;
        }
    }

    .app-input__input:focus ~ .app-input__input-list {
        display: block;
    }

    &__input-label {
        position: absolute;
        top: 16px;
        left: 0;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        color: $color_gray2;
        transition: all 0.25s $easeInOutCirc;
        pointer-events: none;
    }

    &__input {
        width: 100%;
        padding: 17px 22px 15px 0;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        border: none;
        border-bottom: 1px solid $color_gray2;

        @include mq(767) {
            padding-bottom: 5px;
        }

        &::placeholder {
            color: transparent;
        }

        &:focus {
            + .app-input__input-label {
                top: 0;
                left: 0;
                font-size: 10px;
                line-height: 12px;
            }
        }

        &:not(:placeholder-shown) {
            + .app-input__input-label {
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
        transition: all 0.25s $easeInOutCirc;
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
        transition: all 0.25s $easeInOutCirc;

        &--invalid {
            display: block;
            background-image: url('/img/red-cross.svg');
        }

        &--valid {
            display: block;
            background-image: url('/img/green-tick.svg');
        }

        & + .app-input__password-input-mode-button {
            right: 32px;
        }
    }

    &__info {
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
        color: $color_gray2;
        margin-bottom: 30px;
    }

    &__input-list {
        position: absolute;
        z-index: 2;
        top: 100%;
        left: 0;
        display: none;
        width: 100%;
        padding: 10px 0;
        border: 1px solid $color_gray2;
        border-radius: 4px;
        background-color: #fff;
    }

    &__input-list-item {
        padding: 10px 20px;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        cursor: pointer;

        &:hover {
            background-color: $color_lightgray2;
        }
    }
}
</style>
