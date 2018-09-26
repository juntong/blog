<template>
  <div>
    <div class="container mx-auto px-4">
      <div class="flex w-full justify-center py-4">
        <span class="text-3xl">Blog...</span>
      </div>
      <menu-layout/>
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import MenuLayout from '../components/Menu'

  export default {
    components: {
      MenuLayout
    }
  }
</script>
