import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { DiceComponent } from './dice/dice.component';

const routes: Routes = [
  { path: '',pathMatch: "full", component: CalculatorComponent},
  { path: 'cal', component: CalculatorComponent},
  { path: 'dice', component: DiceComponent},
  { path: '**', redirectTo:'/cal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
