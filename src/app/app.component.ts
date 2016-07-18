import { Component } from '@angular/core';
import { HeaderComponent } from './header/';
import { FooterComponent } from './footer/';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
}
