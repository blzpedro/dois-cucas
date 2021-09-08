import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  scroll(){
    const contador = document.getElementById('contador')
    if(contador){
      window.onscroll = function() {
        if(window.scrollY > 850){
          contador.style.animation = 'counter 5s forwards ease-in-out';
        }
      };
    }
  }
  

  toCursos(){    
    const elementList = document.querySelectorAll('.cursos');
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
