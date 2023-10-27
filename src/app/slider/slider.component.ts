import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  images = [
    {path: '../../assets/images/slider-img-01.png'},
    {path: '../../assets/images/slider-img-02.png'},
    {path: '../../assets/images/slider-img-03.png'},
  ]

}
