import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { SearchPage } from '../search/search';
import {ListPage} from '../list/list'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = ListPage;
  tab2Root = SearchPage;
  tab3Root = MapPage;

  constructor() {

  }
}
