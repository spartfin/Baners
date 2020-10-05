<template>
    <button class="app-btn-close" @click="$emit('click')">
        <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.70711" y1="1.29289" x2="20.0919" y2="19.6777" stroke="currentColor" stroke-width="2" />
            <line x1="1.31185" y1="19.1663" x2="20.1766" y2="1.27438" stroke="currentColor" stroke-width="2" />
        </svg>
    </button>
</template>

<script>
export default {
    props: {
    },
    computed: {
        btnClass() {
            const btnKind = `app-button--${this.kind}`;
            const btnWide = this.wide ? 'app-button--wide' : '';
            return `${btnKind} ${btnWide}`;
        },
    },
};
</script>

<style lang="scss">
</style>
