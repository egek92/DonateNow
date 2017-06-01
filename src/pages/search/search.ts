import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Locations} from '../../providers/locations';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public  bloods: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,af: AngularFire, public afDatabase: AngularFireDatabase) {
    //  this.bloods = af.database.list('/Bloods');
    this.bloods = afDatabase.list('/Bloods')

  }



  pickBloodType(bloodType: string){
    console.log(bloodType);
    this.bloods = this.afDatabase.list('Bloods', {
      query: {
        orderByChild: 'type',
        equalTo: bloodType
      }

    });
  }
  pickOlderPeople(phone: string){
    console.log(this.afDatabase.list('Bloods', {
      query: {
        orderByChild: 'phone',
        equalTo: parseInt(phone)

      }

    }));
    this.afDatabase.list('Bloods', {
      query: {
        equalTo: parseInt(phone)

      }

    });
    console.log(phone);
  }
  ionViewDidLoad() {

  }

}
