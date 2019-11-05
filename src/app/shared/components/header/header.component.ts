import { Component, OnInit } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'ngkx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public isCollapsed: boolean = true;
  public searchIcon: IconDefinition;

  constructor() { }

  ngOnInit() {
    this.searchIcon = faSearch;
  }

}
