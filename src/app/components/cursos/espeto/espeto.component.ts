import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espeto',
  templateUrl: './espeto.component.html',
  styleUrls: ['./espeto.component.scss']
})
export class EspetoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
