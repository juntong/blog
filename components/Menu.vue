<template>
  <div class="flex flex-wrap justify-around mb-4 shadow py-4 bg-white font-bold sticky pin-t">
    <router-link
      class="w-1/6 text-center cursor-pointer"
      tag="div"
      :to="{ name: 'lesson', params: { lesson: item.slug }}"
      v-for="(item, key) in resources"
      :key="key"
    >
      {{ item.content.name }}
    </router-link>
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
