import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngkx-base-prop-card',
  templateUrl: './base-prop-card.component.html',
  styleUrls: ['./base-prop-card.component.scss']
})
export class BasePropCardComponent implements OnInit {

  @Input("prop") basePropTitle: string;
  @Input("value") basePropValue: string;

  constructor() { }

  ngOnInit() {
  }

}
