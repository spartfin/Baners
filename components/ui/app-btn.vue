<template>
    <button v-cloak class="app-button" :class="btnClass" :type="type" @click="click">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button',
        },
        kind: {
            type: String,
            default: 'neutral',
        },
        wide: {
            type: Boolean,
            default: false,
        },
        small: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        btnClass() {
            const btnKind = `app-button--${this.kind}`;
            const btnWide = this.wide ? 'app-button--wide' : '';
            const btnSmall = this.small ? 'app-button--small' : '';
            return `${btnKind} ${btnWide} ${btnSmall}`;
        },
    },
    methods: {
        click() {
            this.$emit('click');
        },
    },
};
</script>

<style lang="scss">
.app-button {
    display: inline-block;
    padding: 15px 20px;
    font-family: $Montserrat;
    font-size: 12px;
    line-height: (15/12);
    font-weight: 600;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: $color_black1;
    border: none;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &[v-cloak] {
        display: none;
    }


    &--additional {
        border: 1px solid $color_black1;

        &:hover {
            color: $color_yellow2;
            border-color: $color_yellow2;
        }

        &:active {
            color: $color_yellow3;
            border-color: $color_yellow3;
        }

        &[disabled] {
            color: $color_gray3;
            background-color: $color_gray3;
        }
    }

    &--neutral {
        background-color: $color_lightgray2;

        &:hover {
            background-color: $color_lightgray3;
        }

        &:active {
            background-color: $color_lightgray4;
        }

        &[disabled] {
            color: $color_gray2;
            background-color: $color_lightgray2;
        }
    }

    &--accent {
        background-color: $color_yellow1;

        &:hover {
            background-color: $color_yellow2;
        }

        &:active {
            background-color: $color_yellow3;
        }

        &[disabled] {
            color: $color_gray2;
            background-color: $color_lightgray2;
        }

        &[valid] {
            background-color: $color_yellow1;
        }
    }

    &--wide {
        flex-grow: 1;
        width: 100%;
    }

    &--small {
        padding: 11px 15px 10px;
        font-size: 10px;
        line-height: (12/10);
    }

    &--lend2 {
        background-color: $color_lightred1;

        &:hover {
            background-color: rgba($color_lightred1, 0.8);
        }
    }

    &--lend3 {
        background-color: $color_lightblue3;

        &:hover {
            background-color: rgba($color_lightblue3, 0.8);
        }
    }

    &--lend4 {
        background-color: $color_lightred4;

        &:hover {
            background-color: rgba($color_lightred4, 0.8);
        }
    }

    &--lend5 {
        background-color: $color_darkred1;

        &:hover {
            background-color: rgba($color_darkred1, 0.8);
        }
    }
}
</style>
