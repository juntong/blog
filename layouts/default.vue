<template>
  <div>
    <nav-layout/>
    <div class="container mx-auto px-4 font-kanit">
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
