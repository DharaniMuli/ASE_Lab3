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

  constructor(public nutriService:NutritionserviceService, texttospeech:TexttospeechserviceService) { }

  ngOnInit() {
  }
  getNutriFacts () {

    this.nutriService.getNutritionService(this.foodItem).subscribe(data=>{
      this.nutritionFacts=data;
    });

  }
}
