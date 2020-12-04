<template>
  <div id="app">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'

export default {
    name: 'App',
    components: {
        Body,
        Header,
    }
}
</script>

<style lang="sass">
    body
        font-family: Open Sans, Roboto
        font-size: 14px
        margin: 10px 20px
        color: #383737
        background: #fcfcfc
</style>
