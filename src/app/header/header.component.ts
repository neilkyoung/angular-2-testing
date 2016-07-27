import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  showAlert(event){
  	event.preventDefault();
  	alert("Sending you to races!");
    this.navigateToRaces();
  	return false;
  }

  navigateToRaces(){
    this.router.navigate(['/races']);
  }

}
