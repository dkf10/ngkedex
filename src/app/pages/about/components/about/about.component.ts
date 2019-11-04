import { Component, OnInit } from '@angular/core';
import { version } from "../../../../../../package.json";

@Component({
  selector: 'ngkx-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public ngkxVersion: string;

  constructor() { }

  ngOnInit() {
    this.ngkxVersion = version;
    
  }

}
