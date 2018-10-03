<template>
  <div>
    <list-item
      v-for="(story, key) in resources"
      :key="key"
      :story="story"
    />
  </div>
</template>

<script>
  import { get } from 'vuex-pathify'

  import ListItem from '~/components/article/ListItem'

  export default {
    name: 'LessonIndex',
    async fetch ({ store, params }) {
      await store.dispatch('lesson/findLessons', params.lesson)
    },
    components: {
      ListItem
    },
    computed: {
      resources: get('lesson/lessons'),
      category: get('lesson/category')
    },
    head () {
      return {
        title: `Lesson: ${this.category.content.name}`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.category.content.description
          }
        ]
      }
    }
  }
</script>
