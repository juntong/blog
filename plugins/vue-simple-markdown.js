import Vue from 'vue'
import VueSimpleMarkdown from 'vue-simple-markdown'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import '~/assets/css/custom_markdown.css'

Vue.use(VueSimpleMarkdown)
