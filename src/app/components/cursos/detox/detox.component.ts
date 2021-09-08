import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detox',
  templateUrl: './detox.component.html',
  styleUrls: ['./detox.component.scss']
})
export class DetoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
