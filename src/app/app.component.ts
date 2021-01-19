import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_RFHPja.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
