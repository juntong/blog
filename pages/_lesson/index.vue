<template>
  <div>
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
  </div>
</template>

<script>
  import { get } from 'vuex-pathify'

  export default {
    name: 'LessonIndex',
    async fetch ({ store, params }) {
      await store.dispatch('lesson/findLessons', params.lesson)
    },
    computed: {
      resources: get('lesson/lessons')
    }
  }
</script>
