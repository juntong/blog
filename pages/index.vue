<template>
  <section>
    <list-item
      v-for="(story, key) in resources"
      :key="key"
      :story="story"
    />
    <adsbygoogle class="w-full" />
  </section>
</template>


<script>
  import { get, call } from 'vuex-pathify'

  import ListItem from '~/components/article/ListItem'

  export default {
    async fetch ({ store }) {
      await store.dispatch('lesson/fetchLesson')
    },
    components: {
      ListItem
    },
    computed: {
      resources: get('lesson/lessons')
    }
  }
</script>
