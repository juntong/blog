<template>
  <div class="w-full justify-between py-4 mb-6 font-kanit bg-white shadow sticky pin-t">
    <div class="w-full flex container mx-auto px-4">
      <div class="w-full md:w-3/5 text-center md:text-left text-3xl font-bold">Blog</div>
      <div class="w-2/5 hidden md:flex items-stretch text-right">
        <router-link
          class="flex-1 self-center cursor-pointer"
          tag="div"
          :to="{ name: 'lesson', params: { lesson: item.slug }}"
          v-for="(item, key) in resources"
          :key="key"
        >
          {{ item.content.name }}
        </router-link>
      </div>
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
