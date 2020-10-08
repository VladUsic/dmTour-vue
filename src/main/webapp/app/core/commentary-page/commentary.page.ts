import Component from 'vue-class-component';
import {Vue } from 'vue-property-decorator';


@Component
export default class CommentaryPage extends Vue {
  public audits: any = [];
  public totalItems = 0;
  public itemsPerPage = 20;
  public page = 1;
  public previousPage = 1;


  public loadPage(page): void {
    if (page !== this.previousPage) {
      this.previousPage = page;
    }
  }
}
