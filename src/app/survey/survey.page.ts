import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {

  constructor(
   private alertCntrl: AlertController
  ) { }

  ngOnInit() { 
  }

  CreatePrompt()
  {
this.alertCntrl.create({
  header: 'Submit review?',
  message: 'Confirm?',

  buttons:[
    {
      text:"No",
      handler:(data)=>{
        alert("user cancelled")
      }
    },
    {
      text:"Yes",
      handler:()=>{
        alert("Thank You");
      }
    }
  ]
}).then((promptElement)=>{
  promptElement.present();
})
  }

}
