import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicados',
  templateUrl: './indicados.component.html',
  styleUrls: ['./indicados.component.scss']
})
export class IndicadosComponent implements OnInit {
  
  contador: number = 0
  constructor() { }

  ngOnInit(): void {
    setInterval(() => { 
      if(window.scrollY > 850){
        if(this.contador < 937){
          this.contador++
        } 
      }      
    }, 20);
  }
}
