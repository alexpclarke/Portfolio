<template>
  <div id="ContactForm">
    <form action="">
      <label for="name">Name:</label>
      <input type="text" id="name" required>
      <label for="name">E-Mail:</label>
      <input type="text" id="email" required>
      <label for="name">Message:</label>
      <textarea name="" id="message" cols="30" rows="10" required></textarea>
      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style lang="sass" scoped>
#ContactForm
  height: 100%
  width: 100%
  box-sizing: border-box
  overflow: auto
  form
    label, input, textarea
      font-size: 24px
      line-height: 26px
      box-sizing: border-box
      font-family: helvetica
      color: #333333
    input[type="text"], textarea
      padding: 10px 14px
      border: 2px solid #333333
      outline: none
      width: 100%
      background-color: inherit 
      transition: all 0.2s
      resize: none
      &:not(:first-child)
        margin-bottom: 20px
      &:focus
        border-color: #DE3C4B
        background-color: #FFFFFF
      &:valid
        background-color: #FFFFFF
    input[type="submit"]
      padding: 10px 14px
      border: 2px solid #333333
      float: right
      cursor: pointer
      transition: all 0.2s
      background-color: inherit
      &:hover
        background-color: #FFFFFF
      &:active
        color: #DE3C4B
        border-color: #DE3C4B
</style>