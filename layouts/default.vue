<template>
    <div>
        <nuxt />
    </div>
</template>

<style lang="scss">
html {
    box-sizing: border-box;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    color: #3b8070;
    border: 1px solid #3b8070;
    border-radius: 4px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    color: #35495e;
    border: 1px solid #35495e;
    border-radius: 4px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
