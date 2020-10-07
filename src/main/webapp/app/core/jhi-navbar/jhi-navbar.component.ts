import { Component, Inject, Vue } from 'vue-property-decorator';
import { VERSION } from '@/constants';
import LoginService from '@/account/login.service';
import AccountService from '@/account/account.service';

@Component
export default class JhiNavbar extends Vue {
  logo = '../../../content/images/logo-globus.png';
  travelGroup="../../../content/images/TravelGroup.png";
  @Inject('loginService')
  private loginService: () => LoginService;

  @Inject('accountService') private accountService: () => AccountService;
  public version = VERSION ? 'v' + VERSION : '';
  private currentLanguage = this.$store.getters.currentLanguage;
  private languages: any = this.$store.getters.languages;
  private hasAnyAuthorityValue = false;
  private prevScrollpos = 200;
  goToHome() {
    this.$router.push('/');
  }
  mounted() {
    this.checkNavBar();
  }
  public subIsActive(input) {
    const paths = Array.isArray(input) ? input : [input];
    return paths.some(path => {
      return this.$route.path.indexOf(path) === 0; // current path starts with this path string
    });
  }
  public logout(): void {
    this.loginService()
      .logout()
      .then(response => {
        this.$store.commit('logout');
        this.$router.push('/');
      });
  }
  public openLogin(): void {
    this.loginService().openLogin((<any>this).$root);
  }
  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }
  public hasAnyAuthority(authorities: any): boolean {
    this.accountService()
      .hasAnyAuthorityAndCheckAuth(authorities)
      .then(value => {
        this.hasAnyAuthorityValue = value;
      });
    return this.hasAnyAuthorityValue;
  }
  public get swaggerEnabled(): boolean {
    return this.$store.getters.activeProfiles.indexOf('swagger') > -1;
  }
  public get inProduction(): boolean {
    return this.$store.getters.activeProfiles.indexOf('prod') > -1;
  }
  public get isBlue(): boolean {
    return this.$store.getters.navbarWillBeBlue;
  }
  public get isTransparent(): boolean {
    return !this.$store.getters.navbarWillBeBlue;
  }
  public checkNavBar() {
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.opacity = '1';
      } else {
        document.getElementById('navbar').style.opacity = '0';
      }
    )}
}
