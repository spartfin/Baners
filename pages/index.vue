<template>
    <section class="container">
        <div>
            <app-logo />
            <h1 class="title">Banners</h1>
            <h2 class="subtitle">Здесь должно быть описание)) </h2>
            <div class="links">
                <nuxt-link
                    :to="params.link"
                    class="button--green"
                >
                    Documentation
                </nuxt-link>
                <nuxt-link
                    to="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    class="button--grey"
                >
                    GitHub
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
import AppLogo from '../components/AppLogo.vue';

export default {
    components: {
        AppLogo,
    },
    data: () => ({
        params:
        {
            link: '/banners-list',
        },
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
    font-weight: 300;
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
