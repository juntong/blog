<template>
  <div>
    <h3 class="text-3xl text-grey-darket mb-6">{{ story.content.title }}</h3>
    <p class="text-grey-darker mb-3 border-b text-sm pb-4">
      {{ story.content.description }}
    </p>
    <vue-simple-markdown :source="story.content.content"/>
  </div>
</template>

<script>
export default {
  name: 'LessonSlug',
  data () {
    return { story: { content: {} } }
  },
  asyncData ({ app, params, isDev, query }) {
    // // Check if we are in the editor mode
    let version = query._storyblok || isDev ? 'draft' : 'published'
    //
    // // Load the JSON from the API
    return app.$storyapi.get(`cdn/stories/posts/${params.lesson}/${params.slug}`, {
      find_by: 'slug',
      version: version
    }).then((res) => {
      return res.data
    })
  }
}
</script>

<style lang="css" scoped>

</style>
