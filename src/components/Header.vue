<template>
  <div id="Header">
    <div class="container">
      <router-link to="/">
        <img src="@/assets/name_red.png" alt="Alex Clarke Logo">
      </router-link>
      <ul>
        <router-link to="/about"><li>About</li></router-link>
        <router-link to="/portfolio"><li>Portfolio</li></router-link>
        <router-link to="/contact"><li>Contact</li></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass" scoped>
#Header
  background-color: #FFFFFF
  width: 100vw
  height: 70px
  img
    height: 60px
    margin: 5px
    margin-left: 10px
    float: left
  ul
    box-sizing: border-box
    padding-top: 30px
    height: 100%
    float: right
    a
      margin-left: 20px
      margin-right: 20px
      li
        color: #000000
        display: inline
        font-family: helvetica
        text-transform: uppercase
        font-size: 20px
        transition: color 0.2s, border-color 0.2s
        &:hover
          color: #666666
          
      &.router-link-active
        li
          border-bottom: 2px solid black
          &:hover
            border-color: #666666
</style>