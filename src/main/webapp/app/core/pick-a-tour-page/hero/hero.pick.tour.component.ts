import Component from 'vue-class-component';
import {Vue } from 'vue-property-decorator';
import ChooseADirectionOfTour from "../choose-a-direction-of-travel/choose-a-direction-of-tour-component.vue";


@Component({
  components: {
    'where-you-wanna-to-go-form': ChooseADirectionOfTour,
  }
})
export default class HeroComponentPickTour extends Vue {
  background='../../../../content/video/pick-a-tour-hero-video.mp4';
}
