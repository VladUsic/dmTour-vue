import Vue from 'vue';
import Component from 'vue-class-component';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import LoginForm from '@/account/login-form/login-form.vue';
// @ts-ignore
import JhiFooter from '@/core/jhi-footer/jhi-footer';

@Component({
  components: {
    'jhi-navbar': JhiNavbar,
    'login-form': LoginForm,
    'jhi-footer': JhiFooter
  },
})
export default class App extends Vue {

}
