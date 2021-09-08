import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doces',
  templateUrl: './doces.component.html',
  styleUrls: ['./doces.component.scss']
})
export class DocesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
