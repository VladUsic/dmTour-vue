import Component from 'vue-class-component';
import { Inject, Vue } from 'vue-property-decorator';
import LoginService from '@/account/login.service';
import HeroComponent from './hero/hero-section.vue';
import AboutComponent from "./about/about-section.vue";
import ServicesComponent from "./services/services-section.vue";
import FeaturesComponent from "./features/features-section.vue";

@Component({
  name: 'Home',
  components: {
    'hero-component':HeroComponent,
    'about-component':AboutComponent,
    'services-component':ServicesComponent,
    'features-component':FeaturesComponent
  }
})
export default class Home extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;
  public openLogin(): void {
    this.loginService().openLogin((<any>this).$root);
  }
  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }
  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
}
