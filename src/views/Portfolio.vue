<template>
  <div id="portfolio">
    <h1>Portfolio</h1>
    <router-link to="/portfolio/placeholder">
      <img class="thumbnail" src="@/assets/place-holder.png" alt="">
    </router-link>
    <router-link to="/portfolio/placeholder">
      <img class="thumbnail" src="@/assets/place-holder.png" alt="">
    </router-link>
    <router-link to="/portfolio/placeholder">
      <img class="thumbnail" src="@/assets/place-holder.png" alt="">
    </router-link>
    <router-link to="/portfolio/placeholder">
      <img class="thumbnail" src="@/assets/place-holder.png" alt="">
    </router-link>
    <router-link to="/portfolio/placeholder">
      <img class="thumbnail" src="@/assets/place-holder.png" alt="">
    </router-link>
    <router-link to="/portfolio/placeholder">
      <img class="thumbnail" src="@/assets/place-holder.png" alt="">
    </router-link>
    <router-link to="/portfolio/placeholder">
      <img class="thumbnail" src="@/assets/place-holder.png" alt="">
    </router-link>
    <router-link to="/portfolio/placeholder">
      <img class="thumbnail" src="@/assets/place-holder.png" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Portfolio'
}
</script>

<style lang="sass" scoped>
#portfolio
  box-sizing: border-box
  overflow: auto
  h1
    text-align: center
    font-size: 48px
    font-family: Helvetica, sans-serif
    font-weight: normal
    padding: 20px 0px
    margin: 0
  .thumbnail
    background-color: blue
    width: calc(50vw - 30px)
    max-width: 570px
    float: left
    margin: 10px
    transition: box-shadow 0.1s ease, transform 0.1s ease
    &:hover
      box-shadow: 0px 4px 6px 0px #666666
      transform: scale(1.02, 1.02) translateY(-2px)
</style>