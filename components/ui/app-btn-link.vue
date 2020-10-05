<template>
    <n-link
        :to="to"
        class="app-button-link"
        :class="btnClass"
        :type="type"
        :event="event"
        @click.native="click"
    >
        <slot></slot>
    </n-link>
</template>

<script>
export default {
    props: {
        params: {
            type: Object,
            default: () => ({}),
        },
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
        event: {
            type: String,
            default: 'click',
        },
        to: {
            type: String,
            default: '',
        },
    },
    computed: {
        btnClass() {
            const btnKind = `app-button-link--${this.kind}`;
            const btnWide = this.wide ? 'app-button-link--wide' : '';
            return `${btnKind} ${btnWide}`;
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
.app-button-link {
    display: inline-block;
    padding: 15px 20px;
    font-family: $Montserrat;
    font-size: 12px;
    line-height: 15px;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: $color_black1;
    border: none;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;


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
    }

    &--wide {
        flex-grow: 1;
        width: 100%;
    }

    &--lend1 {
        padding: 25px 60px;
        font-size: 15px;
        color: #fff;
        background: linear-gradient(90deg, #2c0858 0%, #2c0858 25%, #74145f 50%, #2c0858 75%, #2c0858 100%);
        background-size: 400% 100%;
        animation: landing-button-animation 8s linear infinite;

        &:hover {
            color: $color_orange-lend1;
            animation: landing-button-animation 1.5s linear infinite;
        }

        @include mq(1023) {
            width: 100%;
            max-width: 267px;
            padding: 25px 20px;
            text-align: center;
        }

        @include mq(375) {
            max-width: 100%;
        }
    }

    &--lend2 {
        max-width: max-content;
        padding: 24px 61px;
        color: #fff;
        background: linear-gradient(90deg, #f37458 0%, #f37458 25%, #8a311d 50%, #f37458 75%, #f37458 100%);
        background-size: 400% 100%;
        animation: landing-button-animation 8s linear infinite;
        margin-bottom: 20px;

        // &:hover {
        //     background-color: rgba($color_lightred1, 0.8);
        // }

        @include mq(1023) {
            padding: 15px 20px;
            margin-bottom: 45px;
        }

        @include mq(767) {
            padding: 12px 18px;
            margin-bottom: 30px;
        }
    }

    &--lend3 {
        max-width: max-content;
        padding: 23px 40px;
        font-size: 15px;
        line-height: (18/15);
        font-weight: 700;
        color: #fff;
        background: linear-gradient(90deg, #428dff 0%, #428dff 25%, #153e7c 50%, #428dff 75%, #428dff 100%);
        background-size: 400% 100%;
        animation: landing-button-animation 8s linear infinite;
        margin-bottom: 20px;

        // &:hover {
        //     background-color: rgba($color_lightblue2, 0.8);
        // }

        @include mq(1023) {
            padding: 15px 20px;
        }

        @include mq(767) {
            padding: 12px 18px;
            margin-bottom: 30px;
        }
    }

    &--lend3-min {
        width: max-content;
        padding: 22px 34px 20px;
        font-size: 14px;
        line-height: (17/15);
        font-weight: 700;
        color: #fff;
        background: linear-gradient(90deg, #428dff 0%, #428dff 25%, #143970 50%, #428dff 75%, #428dff 100%);
        background-size: 400% 100%;
        animation: landing-button-animation 8s linear infinite;

        @include mq(767) {
            margin-bottom: 40px;
        }

        // &:hover {
        //     background-color: rgba($color_lightblue2, 0.8);
        // }
    }

    &--lend4 {
        width: 100%;
        max-width: 284px;
        padding: 23px 10px;
        font-size: 15px;
        line-height: (18/15);
        font-weight: 700;
        letter-spacing: 0.03em;
        text-align: center;
        color: #fff;
        background: linear-gradient(90deg, #dc6c48 0%, #dc6c48 25%, #742e17 50%, #dc6c48 75%, #dc6c48 100%);
        background-size: 400% 100%;
        animation: landing-button-animation 8s linear infinite;
        margin-bottom: 20px;

        // &:hover {
        //     background-color: rgba($color_lightred4, 0.8);
        // }
    }

    &--lend5 {
        max-width: max-content;
        padding: 24px 61px;
        font-size: 15px;
        line-height: (18/15);
        font-weight: 700;
        color: #fff;
        background: linear-gradient(90deg, #ed4c5c 0%, #ed4c5c 25%, #8d4d54 50%, #ed4c5c 75%, #ed4c5c 100%);
        background-size: 400% 100%;
        animation: landing-button-animation 8s linear infinite;
        margin-bottom: 20px;

        // &:hover {
        //     background-color: rgba($color_intro-lend5, 0.8);
        // }

        @include mq(1023) {
            padding: 15px 20px;
        }

        @include mq(767) {
            padding: 12px 18px;
            margin-bottom: 30px;
        }
    }

    &--lend5-min {
        padding: 23px 40px;
        font-size: 15px;
        line-height: (18/15);
        font-weight: 600;
        color: #fff;
        background: linear-gradient(90deg, #ed4c5c 0%, #ed4c5c 25%, #e77e88 50%, #ed4c5c 75%, #ed4c5c 100%);
        background-size: 400% 100%;
        animation: landing-button-animation 8s linear infinite;
        margin-bottom: 20px;

        // &:hover {
        //     background-color: rgba($color_intro-lend5, 0.8);
        // }

        @include mq(1023) {
            padding: 15px 20px;
        }

        @include mq(767) {
            padding: 12px 18px;
            margin-bottom: 30px;
        }
    }

    @keyframes landing-button-animation {
        0% {
            background-position: 0% 50%;
        }

        100% {
            background-position: 100% 50%;
        }
    }
}
</style>
