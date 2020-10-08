import Component from 'vue-class-component';
import {Vue } from 'vue-property-decorator';
import ChooseADirectionOfTour from "../choose-a-direction-of-travel/choose-a-direction-of-tour-component.vue";


@Component
export default class HeroComponentBlogPage extends Vue {
  background='../../../../content/images/ocean.jpg';
}
