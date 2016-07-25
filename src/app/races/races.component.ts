import { Component, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
    selector: 'app-races',
    directives: [
      PolymerElement('vaadin-combo-box'),
      PolymerElement('paper-input'),
      PolymerElement('google-youtube')
    ],
    styles: [
      '.awesome-div{background-color:#F00}'
    ],
    template: `
      <h2>Races</h2>
      <button (click)="refreshRaces()">Refresh the races list</button>
      <p>{{races.length}} races</p>
      <ul>
        <li *ngFor="let race of races; let i=index; let e=even">
          {{ i }}: {{ race.name }} (Even? {{ e }})
        </li>
      </ul>
      <textarea (keydown.alt.space)="onSpacePress($event)">Press space!</textarea>
      <input type="text" #name>
      {{ name.value }}
      <button (click)="name.focus()">Focus the input</button>
      <google-youtube
        video-id="M7lc1UVf-VE"
        height="270px"
        width="480px"
        rel="0"
        start="5"
        autoplay="0" #player>
      </google-youtube>
      <button (click)="player.pause()">Pause!</button>
      <button (click)="player.play()">Play!</button>

      <div [class.awesome-div]="isAnAwesomeDiv()">I've got style</div>
` })
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
