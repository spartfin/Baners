<template>
    <div class="pagination">
        <span class="pagination__prev" :class="{ 'is-disabled': isPrevDisabled }" @click="onPrevClick">
            <svg viewBox="0 0 25 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76257 24.5303 5.46967L19.7574 0.696701C19.4645 0.403808 18.9896 0.403808 18.6967 0.696701C18.4038 0.989594 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM-6.55671e-08 6.75L24 6.75L24 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
            </svg>
        </span>

        <div class="pagination__pages" :class="{ 'is-prev-disabled': isPrevDisabled, 'is-next-disabled': isNextDisabled }">
            <i
                v-for="index in totalPagesCount" :key="index"
                :class="{ 'is-active': index - 1 === currentPageNumber}"
                :title="index"
                @click="onNewClick(index - 1)"
            ></i>
        </div>

        <span class="pagination__next" :class="{ 'is-disabled': isNextDisabled }" @click="onNextClick">
            <svg viewBox="0 0 25 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76257 24.5303 5.46967L19.7574 0.696701C19.4645 0.403808 18.9896 0.403808 18.6967 0.696701C18.4038 0.989594 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM-6.55671e-08 6.75L24 6.75L24 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
            </svg>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        totalPagesCount: {
            type: Number,
            default: 1,
        },

        updatePageNumber: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        currentPageNumber: 0,
    }),

    computed: {
        isPrevDisabled() {
            return this.currentPageNumber <= 0;
        },

        isNextDisabled() {
            return this.currentPageNumber >= this.totalPagesCount - 1;
        },
    },

    watch: {
        updatePageNumber() {
            this.currentPageNumber = 0;
        },
    },

    methods: {
        onPrevClick() {
            if (this.currentPageNumber > 0) {
                this.currentPageNumber -= 1;

                this.$emit('setPage', this.currentPageNumber);
            }
        },

        onNewClick(index) {
            if (this.currentPageNumber !== index) {
                this.currentPageNumber = index;
                this.$emit('setPage', this.currentPageNumber);
            }
        },

        onNextClick() {
            if (this.currentPageNumber <= this.totalPagesCount - 1) {
                this.currentPageNumber += 1;

                this.$emit('setPage', this.currentPageNumber);
            }
        },
    },
};
</script>

<style lang="scss">
.pagination {
    display: flex;
    align-items: center;

    &__prev,
    &__next {
        transition: opacity 0.25s $easeInOutCirc;
        cursor: pointer;

        &.is-disabled {
            opacity: 0.5;
            pointer-events: none;
        }

        svg {
            display: block;
            width: 25px;
            height: 12px;
            fill: $color_gray2;
            transition: fill 0.25s $easeInOutCirc;
        }

        &:hover {
            svg {
                fill: $color_gray5;
            }
        }
    }

    &__prev {
        svg {
            transform: scaleX(-1);
        }
    }

    &__pages {
        position: relative;
        display: flex;
        align-items: center;
        padding: 2px 0;
        margin: 0 20px;

        i {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: $color_gray2;
            transform-origin: 50% 50%;
            transition: background 0.25s $easeInOutCirc, transform 0.25s $easeInOutCirc;
            margin: 0 22px 0 0;
            cursor: pointer;

            &:last-child {
                margin: 0;
            }

            &:hover {
                background: $color_gray5;
            }

            &.is-active {
                position: relative;
                background: $color_yellow1;
                transform: scale(1.25);
            }
        }

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 0;
            width: 30px;
            height: 100%;
            transition: opacity 0.25s $easeInOutCirc;
            pointer-events: none;
        }

        &::before {
            left: 0;
            background: linear-gradient(90deg, rgba(#fff, 1) 0%, rgba(#fff, 0) 100%);
        }

        &::after {
            right: 0;
            background: linear-gradient(90deg, rgba(#fff, 0) 0%, rgba(#fff, 1) 100%);
        }

        &.is-prev-disabled {
            &::before {
                opacity: 0;
            }
        }

        &.is-next-disabled {
            &::after {
                opacity: 0;
            }
        }
    }
}
</style>
