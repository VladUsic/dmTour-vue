import Component from 'vue-class-component';
import {Vue } from 'vue-property-decorator';
import HeroComponentBlogPage from "@/core/blog-page/hero/hero-blog-page.vue";


@Component({
  name: 'BlogPage',
  components: {
    'hero-component':HeroComponentBlogPage,
  }
})
export default class BlogPage extends Vue {
}
