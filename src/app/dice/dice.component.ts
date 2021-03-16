import { Component, OnInit } from '@angular/core';
import { DiceServiceService } from '../services/dice-service.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  diceA;
  diceB;
  diceC;
  diceD;
  diceE;

  totalSum;
  constructor(private diceService:DiceServiceService) { }

  ngOnInit(): void {
    this.getResult();
  }

  getResult(){
    this.diceService.getRandomNumberA().subscribe((res)=>{
      this.diceA = res;
    });

    this.diceService.getRandomNumberB().subscribe((res)=>{
      this.diceB = res;
    });

    this.diceService.getRandomNumberC().subscribe((res)=>{
      this.diceC = res;
    });

    this.diceService.getRandomNumberD().subscribe((res)=>{
      this.diceD = res;
    });

    this.diceService.getRandomNumberE().subscribe((res)=>{
      this.diceE = res;
    });

    this.totalSum = this.diceA + this.diceB + this.diceC + this.diceD ;
  }


}
