<template>
    <div class="app-checkbox">
        <input
            :id="id"
            :checked="value"
            class="app-checkbox__input-checkbox visually-hidden"
            type="checkbox"
            :name="name"
            @input="$emit('input', !value)"
        >
        <label :for="id" class="app-checkbox__input-checkbox-label" @click="$emit('input', !value)">{{ label }}</label>
    </div>
</template>

<script>

export default {
    props: {
        value: {
            type: Boolean,
            default: true,
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
    },
};
</script>

<style lang="scss">
.app-checkbox {
    &__input-checkbox-label {
        position: relative;
        display: inline-block;
        padding-left: 35px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        cursor: pointer;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 24px;
            height: 24px;
            border: 1px solid $color_lightgray4;
            border-radius: 6px;
            cursor: pointer;

            .app-checkbox__input-checkbox:checked ~ & {
                background-image: url('/img/tick.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: 13px 8px;
            }
        }
    }
}
</style>
