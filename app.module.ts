import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { SearchPage } from '../pages/search/search';
import { Locations } from '../providers/locations';
import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';
import { AngularFireModule } from 'angularfire2';

// FireBase Database Settings
export const firebaseConfig = {
  apiKey: "AIzaSyA6n7-cZS4EXKhoUJ_FkSKdD4ZhbtkxGfQ",
    authDomain: "nsfc-ca38e.firebaseapp.com",
    databaseURL: "https://nsfc-ca38e.firebaseio.com",
    storageBucket: "nsfc-ca38e.appspot.com",
    messagingSenderId: "270837763067"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    ListPage,
    SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    ListPage,
    SearchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Locations, GoogleMaps, Connectivity]
})
export class AppModule {}
