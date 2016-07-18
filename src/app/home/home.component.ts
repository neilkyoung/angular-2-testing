import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home works!';

  constructor() {}

  ngOnInit() {
  }

}
