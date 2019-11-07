import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngkx-types-card',
  templateUrl: './types-card.component.html',
  styleUrls: ['./types-card.component.scss']
})
export class TypesCardComponent implements OnInit {

  constructor() { }

  @Input("types") types: string[];

  ngOnInit() {
  }

}
