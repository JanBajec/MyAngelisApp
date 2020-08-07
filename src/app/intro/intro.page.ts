import {Component, OnInit, ViewChild} from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  @ViewChild('slides', {static: false}) slides: IonSlides;

  constructor() { }

  onSkip(){
    this.slides.slideTo(3);
  }

  onNext(){
    this.slides.slideNext();
  }

  ngOnInit() {
  }

}
