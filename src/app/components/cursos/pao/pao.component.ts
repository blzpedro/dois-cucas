import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pao',
  templateUrl: './pao.component.html',
  styleUrls: ['./pao.component.scss']
})
export class PaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
