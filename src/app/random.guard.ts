import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate {
  canActivate() {
    const randomNum = Math.random();
    console.log(randomNum);
    if (randomNum > 0.4) {
      return true
    } else {
      return false
    }
  }
}



