import Component from 'vue-class-component';
import {Vue} from 'vue-property-decorator';
import HeroComponentOrderPageTour from "./hero/hero-section-order-page.vue";
import TripsCards from "./trips-cards/trips-cards.vue";
import AboutTripsTypeComponent from "./about-trips-type/about-trips-type.vue";


@Component({
  name: 'OrderTourPage',
  components: {
    'hero-component':HeroComponentOrderPageTour,
    'trips-cards':TripsCards,
    'about-trips-type':AboutTripsTypeComponent
  }
})
export default class OrderTourPage extends Vue {
}
