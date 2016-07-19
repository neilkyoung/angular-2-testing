import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-races',
    template: `
      <h2>Races</h2>
      <button (click)="refreshRaces()">Refresh the races list</button>
      <p>{{races.length}} races</p>
      <ul>
        <li *ngFor="let race of races">
          <p [textContent]="race.name"></p>
        </li>
      </ul>
` })
  export class RacesComponent {
    races: any = [];
    refreshRaces() {
      this.races = [{ name: 'London' }, { name: 'Lyon' }];
    }
}
