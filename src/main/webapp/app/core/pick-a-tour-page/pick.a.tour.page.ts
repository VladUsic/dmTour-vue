import Component from 'vue-class-component';
import {Vue } from 'vue-property-decorator';
import HeroComponentPickTour from "./hero/hero-section-pick-tour.vue";
import ChooseADirectionOfTour from "./choose-a-direction-of-travel/choose-a-direction-of-tour-component.vue";


@Component({
  name: 'OrderTourPage',
  components: {
    'hero-component':HeroComponentPickTour,
    'where-you-wanna-to-go-form': ChooseADirectionOfTour,
  }
})
export default class PickATourPage extends Vue {
}
