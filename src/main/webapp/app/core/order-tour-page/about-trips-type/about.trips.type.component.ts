import Component from 'vue-class-component';
import {Vue } from 'vue-property-decorator';


@Component
export default class AboutTripsTypeComponent extends Vue {
    vipTours = '../../../../content/images/vip-tours.jpg';
    groupTours = '../../../../content/images/groups-tours.jpg';
    airTours = '../../../../content/images/air-tours.jpg';
    busTours ='../../../../content/images/buss.jpg';
}

