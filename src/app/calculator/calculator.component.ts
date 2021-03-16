import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result:number;
  constructor() { }

  ngOnInit(): void {
  }

  calculate(form){
    let obj = {
      // calculating IDV
      calculateIDV : function(){
        let depreciationAmount = (+form.showRoomPrice + (+form.costOfAccessories)) * +form.depreciation/100;
        // IDV = Showroom price of your car + cost of accessories (if any) – depreciation value as per (IRDAI)
        return (+form.showRoomPrice + +form.costOfAccessories) - depreciationAmount;
    },
    //calculate OD premium amount is:
    odPremium: function(){
        //kept this cosntant because is it decided by insurrer
        let premiumRateDecidedByInsurer = +form.premiumRate;
        let premiumAmount = ((this.calculateIDV() * premiumRateDecidedByInsurer/100) + +form.addOns ) - +form.disBenifit
        return premiumAmount;
    }
    };
    this.result = obj.odPremium();
  }

  

}
