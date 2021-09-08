import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides = [
    {'image': '../../../assets/images/home-banner1.png', 'id': 'doces'}, 
    {'image': '../../../assets/images/home-banner2.png', 'id': 'espetinho'},
    {'image': '../../../assets/images/home-banner3.png', 'id': 'pao'}, 
    {'image': '../../../assets/images/home-banner4.png', 'id': 'detox'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  redirect(){
    console.log()
  }

}
