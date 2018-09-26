import { make } from 'vuex-pathify'

let state = {
  categories: [
    {
      content: {
        name: ''
      }
    }
  ],
  lessons: [
    {
      content: {
        title: 'title',
        description: 'description'
      }
    }
  ]
}

export default {
  namespaced: true,
  state,
  getter: {
    ...make.getters(state)
  },
  actions: {
    ...make.actions(state),
    fetchCategory ({ commit }) {
      let context = this.app.context
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

      context.app.$storyapi.get('cdn/stories', {
        starts_with: 'categories/',
        version: version
      }).then((res) => {
        commit('SET_CATEGORIES', res.data.stories)
      }).catch((res) => {
      })
    },
    fetchLesson ({ commit }) {
      let context = this.app.context
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

      context.app.$storyapi.get('cdn/stories', {
        starts_with: 'posts/',
        version: version
      }).then((res) => {
        commit('SET_LESSONS', res.data.stories)
      }).catch((res) => {
      })
    },
    async findLessons ({ commit }, lesson) {
      let context = this.app.context
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
      let { data } = await context.app.$storyapi.get(`cdn/stories/categories/${lesson}`, {
        version: version
      })

      context.app.$storyapi.get('cdn/stories', {
        starts_with: 'posts/',
        'filter_query[categories][exists]': data.story.uuid,
        version: version
      }).then((res) => {
        commit('SET_LESSONS', res.data.stories)
      }).catch((res) => {
      })
    }
  },
  mutations: {
    ...make.mutations(state)
  }
}
