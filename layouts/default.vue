<template>
  <div class="justify-between font-kanit">
    <nav-layout/>
    <div class="container mx-auto px-4 h-full">
      <nuxt/>
    </div>
    <!--<footer class="w-full flex container mx-auto px-4 py-10">-->
      <!--<span>-->
        <!--<font-awesome-icon :icon="['fa', 'copyright']" /> Vasit Juntong 2018.-->
      <!--</span>-->
    <!--</footer>-->
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
