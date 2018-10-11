<template>
  <div class="justify-between font-kanit">
    <nav-layout/>
    <div class="container mx-auto px-4 h-full">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import NavLayout from '../components/Nav'
  import MenuLayout from '../components/Menu'

  export default {
    components: {
      NavLayout,
      MenuLayout
    }
  }
</script>
