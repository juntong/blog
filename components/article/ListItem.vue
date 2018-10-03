<template>
  <router-link
    class="flex flex-wrap items-stretch cursor-pointer mb-6"
    :to="{
      name: 'content-lesson-slug',
      params: {
        lesson: story.content.label, slug: story.slug
      }
    }"
    tag="div"
  >
    <div class="w-full md:w-1/6 text-center mr-0 md:mr-2">
      <font-awesome-icon
        :icon="['fab', story.content.label]"
        size="5x"
      />
    </div>
    <div class="w-full md:flex-1">
      <h3 class="mb-4">{{ story.content.title }}</h3>
      <p class="mb-6">{{ story.content.description }}</p>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      story: {
        type: Object,
        required: true
      }
    }
  }
</script>
