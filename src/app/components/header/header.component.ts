import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @ViewChild('inputMessage')
  inputMessageRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  scroll(item) {
    const elementList = document.querySelectorAll('.' + item);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  
}
