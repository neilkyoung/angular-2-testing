import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { Project } from './project';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'project',
  inputs: ['project'],
  // we declare the custom event as an output
  outputs: ['projectSelected'],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css']
})
export class ProjectComponent {
  //project that is assigned
  @Input() project: Project;

  // the EventEmitter is used to emit the event
  projectSelected: EventEmitter<Project> = new EventEmitter<Project>();

  constructor() {}

  /**
   * Selects a project when the component is clicked.
   * Emits a custom event.
   */
  selectProject() {
    console.log( "Project was clicked!" );
    console.log( this.project );
    this.projectSelected.emit(this.project);
  }

}
