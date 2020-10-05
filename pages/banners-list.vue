<template>
    <section class="container">
        <div>
            <h1 class="title" v-html="params.title"></h1>
            <h2 class="subtitle">Здесь должно быть описание))</h2>
            <div class="links">
                <a href="/" class="button--grey">Главная</a>
                <app-btn kind="additional">Нажми</app-btn>
            </div>
        </div>
    </section>
</template>

<script>
import AppBtn from '../components/ui/app-btn.vue';

export default {
    components: {
        AppBtn,
    },
    data: () => ({
        params: { title: 'Banners' },
    }),
};
</script>

<style lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
}

.title {
    display: block;
    font-size: 100px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #35495e;
}

.subtitle {
    padding-bottom: 15px;
    font-size: 42px;
    font-weight: 300;
    word-spacing: 5px;
    color: #526488;
}

.links {
    padding-top: 15px;
}
</style>
