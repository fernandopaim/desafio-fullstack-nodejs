<template>
    <div id="header">
        <img class="logo" :src="require('@assets/logo.png')" alt="Logo Neoway">
        <h2 class="title-header">Desafio Fernando Paim</h2>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="sass" scoped>
    #header
        position: relative
        text-align: center
        height: 100px
        background: #303968

    .logo
        position: absolute
        top: 50%
        left: 20px
        max-height: 80%
        z-index: 99999
        transform: translateY(-50%)

    .title-header
        display: inline-block
        position: relative
        top: 50%
        margin-top: 10px
        color: #FFF
        transform: translateY(-50%)

    @media screen and (max-width: 948px)
        .logo
            display: none

    @media screen and (max-width: 1024px)
        .logo
            max-width: 200px
</style>