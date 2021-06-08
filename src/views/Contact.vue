<template>
  <div id="Contact">
    <h1>Contact</h1>
    <div id="form-container">
      <ContactForm></ContactForm>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Contact',
  components: {ContactForm}
}
</script>

<style lang="sass" scoped>
h1
  text-align: center
  font-size: 48px
  font-family: Helvetica, sans-serif
  font-weight: normal
  padding: 20px 0px
  margin: 0
#form-container
  width: 600px
  margin: auto
</style>