import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MapPage } from '../map/map';
import { SearchPage } from '../search/search';
import { TabsPage } from '../tabs/tabs';
import {ListPage} from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  map(event) {

  this.navCtrl.setRoot(HomePage);
  this.navCtrl.push(MapPage);

  }

  addBlood(event) {

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(MapPage);

  }


  findBlood(event) {

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(SearchPage);
}

}
