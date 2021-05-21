<template>
  <div id="Under-Construction">
    <div id="Banner">
      UNDER CONSTRUCTION
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnderConstruction'
}
</script>

<style lang="sass" scoped>
#Under-Construction
  position: fixed
  z-index: 105
  right: 0
  top: 0
  height: 183px
  width: 183px
  overflow: hidden
  pointer-events: none
  #Banner
    background-color: #DE3C4B
    text-align: center
    font-family: helvetica
    font-weight: bold
    color: #FFFFFF
    padding: 6px 20px
    width: 260px
    box-sizing: border-box
    height: 30px
    transform: rotate(45deg)
    margin-top: calc(100px - 35px)
    margin-left: -28px
</style>