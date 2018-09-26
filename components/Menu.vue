<template>
  <div class="flex flex-wrap justify-around mb-4 border-t border-b py-2 sticky pin-t">
    <div
      class="w-1/6 text-center"
      v-for="(item, key) in resources"
      :key="key"
    >
      {{ item.content.name }}
    </div>
  </div>
</template>

<script>
  import { get } from 'vuex-pathify'

  export default {
    computed: {
      resources: get('lesson/categories')
    }
  }
</script>
