import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, NavParams } from 'ionic-angular';
import { Locations} from '../../providers/locations';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'

})


export class ListPage {
  bloods: FirebaseListObservable<any>;
  private phone: string;
  private gender: string;
  private age: string;
  private bloodtype: string;
  private d: number;





  constructor(public navCtrl: NavController, public locations: Locations, af: AngularFire,
    public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public navParams: NavParams) {
      this.bloods = af.database.list('/Bloods');

      // let lon = this.navParams.get('lon');

    }

    addBlood(){



      let alert = this.alertCtrl.create();
      let d = this.navParams.get('distance');
      console.log(d + " geldi");
      alert.setTitle('Add me as a DONOR');

      alert.addButton('Cancel');

      alert.addButton({
        text: 'Okay',
        handler: data=> {
          console.log('Checkbox data:', data);

          this.bloods.push({
            type: this.bloodtype,
            phone: this.phone,
            gender: this.gender,
            age: this.age,

            d: this.navParams.get('distance')




          });
        }
      });
      alert.present();
    }


    ionViewDidLoad() {
      console.log('Hello ListPage Page');
    }

  }
