<template>
  <section class="container">
    <div>
      <h1 class="title" v-html="params.title">
      </h1>
      <h2 class="subtitle">
        Здесь должно быть описание))
      </h2>
      <div class="links">
        <a
          href="/"
          class="button--grey">Главная</a>
          <app-btn kind="additional">Нажми</app-btn>
      </div>
    </div>
  </section>
</template>

<script>
import AppBtn from '~/components/ui/app-btn.vue'

export default {
  components: {
    AppBtn
  },
  data: () => ({
        params: {title: 'Banners'},
    }),
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 500;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

