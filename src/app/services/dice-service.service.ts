import { Injectable } from '@angular/core';
import {Subject, Observable, BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiceServiceService {
  getRandomNumberOfDice = new BehaviorSubject(Math.trunc(Math.random() * 6) + 1);
  constructor() { }

  getRandomNumberA():Observable<number>{
    return this.getRandomNumberOfDice.asObservable();
  }

  getRandomNumberB():Observable<number>{
    return this.getRandomNumberOfDice.asObservable();
  }

  getRandomNumberC():Observable<number>{
    return this.getRandomNumberOfDice.asObservable();
  }

  getRandomNumberD():Observable<number>{
    return this.getRandomNumberOfDice.asObservable();
  }

  getRandomNumberE():Observable<number>{
    this.getRandomNumberOfDice.next(Math.trunc(Math.random() * 6) + 1);
    return this.getRandomNumberOfDice.asObservable();
  }
}
