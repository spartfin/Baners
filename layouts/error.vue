<template>
    <div class="container error">
        <h1 class="error__title">{{ error.statusCode }}</h1>
        <p class="error__message">{{ errorMessage }}</p>
        <a href="/" class="error__link">Вернуться на главную</a>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => ({}),
        },
    },

    computed: {
        errorMessage() {
            switch (this.error.statusCode) {
            case 404:
                return 'Страница не найдена';
            case 500:
                return 'Ошибка сервера';
            default:
                return 'Ошибка!';
            }
        },
    },
};
</script>

<style lang="scss">
.error {
    padding: 120px 0 135px;
    text-align: center;

    &__title {
        font-size: 288px;
        line-height: (351 / 288);
        font-weight: 500;
        color: $color_yellow1;
        margin-bottom: 20px;

        @include mq(767) {
            font-size: 100px;
            font-weight: 700;
        }
    }

    &__message {
        font-size: 40px;
        line-height: 49px;
        font-weight: 700;
        margin-bottom: 20px;

        @include mq(767) {
            font-size: 20px;
        }
    }

    &__link {
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
    }
}
</style>
