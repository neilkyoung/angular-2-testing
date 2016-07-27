import { Component, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'app-races',
  directives: [
    PolymerElement('vaadin-combo-box'),
    PolymerElement('paper-input'),
    PolymerElement('google-youtube')
  ],
  templateUrl: 'races.component.html',
  styleUrls: ['races.component.css']
})
export class RacesComponent {
  races: any = [];
  refreshRaces() {
    this.races = [{ name: 'London' }, { name: 'Lyon' }, { name: 'Califonia' }, { name: 'Krawkow' }, { name: 'Manchester' }];
  }
  onSpacePress(e){
    console.log( e );
  }
  isAnAwesomeDiv(){
    return true;
  }
}
