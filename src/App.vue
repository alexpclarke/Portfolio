<template>
  <div id="app">
    <Header></Header>
    <div id="body" class="container">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="sass">
body
  margin: 0
  background-color: #F9F9F9
  a
    color: inherit
    text-decoration: none
  ul
    margin: 0
    padding: 0
    li
      list-style-type: none
  .container
    height: 100%
    max-width: 1200px
    margin: auto
  #body
    top: 70px
    min-height: calc(100vh - 70px - 60px)

  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50

  #nav
    padding: 30px
    a
      font-weight: bold
      color: #2c3e50  
      &.router-link-exact-active
        color: #42b983
.fade-enter-active,
.fade-leave-active
  transition-duration: 0.3s
  transition-property: height, opacity
  transition-timing-function: ease
.fade-enter,
.fade-leave-active
  opacity: 0
</style>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// import SideNav from './components/SideNav.vue';
export default {
  name: 'app',
  components: {Header, Footer}
}
</script>