import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public locations: Locations, af: AngularFire,
    public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
      this.bloods = af.database.list('/Bloods');
    }

    addBlood(){
      let alert = this.alertCtrl.create();
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
            age: this.age
          });
        }
      });
      alert.present();
    }


    ionViewDidLoad() {
      console.log('Hello ListPage Page');
    }

  }
