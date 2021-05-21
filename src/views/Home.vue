<template>
  <div id="Home">
    <div id="home-container">
      <img src="@/assets/name_red.png" alt="Alex Clarke Logo" id="logo">
      <ul id="nav-links">
        <router-link to="/About"><li class="current">About</li></router-link>
        <router-link to="/Portfolio"><li>Portfolio</li></router-link>
        <router-link to="/Contact"><li>Contact</li></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="sass" scoped>
#Home
  background-color: #FFFFFF
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 100%
  #home-container
    width: 400px
    margin: auto
    height: 170px
    margin-top: calc(50vh - 170px)
    #nav-links
      li
        display: inline
        color: #000000
        display: inline
        margin-left: 20px
        margin-right: 20px
        font-family: helvetica
        text-transform: uppercase
        font-size: 20px
        transition: color 0.2s, border-color 0.2s
        &:hover
          color: #666666

</style>