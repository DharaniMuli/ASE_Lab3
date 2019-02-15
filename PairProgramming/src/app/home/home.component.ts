import { Component, OnInit } from '@angular/core';
import {NutritionserviceService} from '../nutritionservice.service';
import {TexttospeechserviceService} from '../texttospeechservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public foodItem;
  public nutritionFacts;
  public displayNutriFacts = false;
  public textToSpeechURL;

  constructor(public nutriService:NutritionserviceService, texttospeech:TexttospeechserviceService) {

    this.setBodyStyles();

  }

  ngOnInit() {
  }

  setBodyStyles() {
    document.getElementById('bodyId').classList.remove("other-style");
    document.getElementById('bodyId').classList.add("home-style");
  }
  getNutriFacts() {
    this.textToSpeechURL = 'http://api.voicerss.org/?key=1a24f04fb685456ca63aef0491db1ffb&hl=en-us&src=you entered '+this.foodItem;
    this.nutriService.getNutritionService(this.foodItem).subscribe(data => {
      this.displayNutriFacts = true;
      this.nutritionFacts = data;
    });
  }
  onSearchChange(val) {
    if (this.displayNutriFacts) {
      val === '' ?  this.displayNutriFacts = false : this.displayNutriFacts = true;
    }
  }
}
