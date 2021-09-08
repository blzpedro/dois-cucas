import { Component, OnInit } from '@angular/core';
import { bounceInLeftAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-dois-cucas',
  templateUrl: './dois-cucas.component.html',
  styleUrls: ['./dois-cucas.component.scss'],
  animations: [
    bounceInLeftAnimation(),
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class DoisCucasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
