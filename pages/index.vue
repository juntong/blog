<template>
  <section>
    <router-link
      class="cursor-pointer mb-6"
      v-for="(story, key) in resources"
      :to="{ name: 'lesson-slug', params: { slug: story.slug }}"
      :key="key"
      tag="div"
    >
      <h3 class="mb-4">{{ story.content.title }}</h3>
      <p class="mb-6">{{ story.content.description }}</p>
    </router-link>
  </section>
</template>


<script>
  import { get, call } from 'vuex-pathify'

  export default {
    async fetch ({ store }) {
      await store.dispatch('lesson/fetchLesson')
    },
    computed: {
      resources: get('lesson/lessons')
    }
  }
</script>
