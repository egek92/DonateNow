import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { Locations} from '../../providers/locations';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


export class ListPage {
  bloods: FirebaseListObservable<any>;





  constructor(public navCtrl: NavController, public locations: Locations, af: AngularFire,
    public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
      this.bloods = af.database.list('/Bloods');
    }

    addBlood(){
      let alert = this.alertCtrl.create();
      alert.setTitle('Choose your blood type');

      alert.addInput({
        type: 'radio',
        label: 'A Rh-',
        value: 'A Rh-',
        checked: false
      });

      alert.addInput({
        type: 'radio',
        label: 'A Rh+',
        value: 'A Rh+'
      });

      alert.addInput({
        type: 'radio',
        label: 'B Rh-',
        value: 'B Rh-',
      });

      alert.addInput({
        type: 'radio',
        label: 'B Rh+',
        value: 'B Rh+',
      });

      alert.addInput({
        type: 'radio',
        label: 'AB Rh-',
        value: 'AB Rh-'
      });

      alert.addInput({
        type: 'radio',
        label: 'AB Rh+',
        value: 'AB Rh+',
      });

      alert.addInput({
        type: 'radio',
        label: '0 Rh-',
        value: '0 Rh-'
      });

      alert.addInput({
        type: 'radio',
        label: '0 Rh+',
        value: '0 Rh+',
      });

      alert.addButton('Cancel');

      alert.addButton({
        text: 'Okay',
        handler: data=> {
          console.log('Checkbox data:', data);

          //this.testCheckboxOpen = false;
          // this.testCheckboxResult = data;

          this.bloods.push({
            type: data
          });
        }
      });
      alert.present();
    }

    showOptions(bloodId, bloodType) {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Change Type',
        buttons: [
          {
            text: 'Delete Blood',
            role: 'destructive',
            handler: () => {
              this.removeBlood(bloodId);
            }
          },{
            text: 'Update Type',
            handler: () => {
              this.updateBlood(bloodId, bloodType);
            }
          },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }


    removeBlood(bloodId: string){
      this.bloods.remove(bloodId);
    }

    updateBlood(bloodId, bloodType){
      let prompt = this.alertCtrl.create({
        title: 'Blood Type',
        message: "Update the type for this blood",
        inputs: [
          {
            name: 'type',
            placeholder: 'Type',
            value: bloodType
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.bloods.update(bloodId, {
                type: data.type
              });
            }
          }
        ]
      });
      prompt.present();
    }


  ionViewDidLoad() {
    console.log('Hello ListPage Page');
  }

}
