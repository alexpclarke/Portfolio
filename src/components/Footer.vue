<template>
  <div id="Footer">
    <div class="container">
      <ul id="social-links">
        <a href="https://www.linkedin.com/in/alexander-clarke-367321bb/" target="_blank"><li>l</li></a>
        <a href="https://www.facebook.com/profile.php?id=1831841680" target="_blank"><li>f</li></a>
        <a href="https://github.com/alexpclarke" target="_blank"><li>g</li></a>
      </ul>
      <div class="copyright">
        &copy; 2020-2021 | Alex P. Clarke
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="sass" scoped>
#Footer
  background-color: #FFFFFF
  width: 100vw
  height: 60px
  ul
    font-family: icons
    height: 30px
    padding-top: 15px
    padding-left: 10px
    float: left
    li
      display: inline
      font-size: 30px
      padding-left: 5px
      padding-right: 5px
      transition: color 0.2s
      &:hover
        color: #666666
  .copyright
    float: right
    padding-top: 21px
    padding-right: 21px
    font-family: helvetica
</style>