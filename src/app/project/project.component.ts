import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Project } from './project';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'project',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css']
})
export class ProjectComponent implements OnInit {
  //project that is assigned
  @Input() project: Project;

  // the EventEmitter is used to emit the event
  @Output() projectSelected: EventEmitter<Project> = new EventEmitter<Project>();

  constructor() {}

  ngOnInit(){
    //console.log(`inputs are ${this.project}`);
  }

  doSomething(){
    console.log("Project Rendered");
    console.log(this.project);

  }

  /**
   * Selects a project when the component is clicked.
   * Emits a custom event.
   */
  selectProject() {
    //console.log( "Project was clicked!" );
    //console.log( this.project );
    this.projectSelected.emit(this.project);
  }

}
