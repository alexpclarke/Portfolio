<template>
  <div id="app">
    <UnderConstruction></UnderConstruction>
    <Header></Header>
    <div id="body" class="container">
      <transition 
        name="fade"
        :mode="transitionMode"
        :css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave">
        <router-view/>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import UnderConstruction from './components/UnderConstruction.vue';

export default {
  name: 'app',
  components: {Header, Footer, UnderConstruction},
  data: function () {
    return {
      transitionMode: '',
      enterDuration: null,
      leaveDuration: null
    }
  },
  watch: {
    '$route' (to, from) {
      if (from.name == 'Home') {
        this.transitionMode = 'in-out';
        this.enterDuration = 0;
        this.leaveDuration = 300;
      } else if(to.name == 'Home') {
        this.transitionMode = 'in-out';
        this.enterDuration = 300;
        this.leaveDuration = 0;
      } else {
        this.transitionMode = 'out-in';
        this.enterDuration = 300;
        this.leaveDuration = 300;
      }
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, {opacity: 1}, {
        duration: this.enterDuration,
        complete: done
      })
    },
    leave: function (el, done) {
      Velocity(el, {opacity: 0}, {
        duration: this.leaveDuration,
        complete: done
      })
    }
  }
}
</script>

<style lang="sass">
@import 'fonts'

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
</style>