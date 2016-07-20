import { Directive, Input, EventEmitter, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from '../project/project';
import { ProjectComponent } from '../project/project.component';

@Component({
  moduleId: module.id,
  selector: 'app-projects',
  //inputs: ['project'],
  //outputs: ['emitter: projectSelected'],
  providers: [ProjectsService],
  directives: [ProjectComponent],
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css']
})
export class ProjectsComponent implements OnInit {
  //private sub: any;
  private projects: Array<Project> = [];
  private errorMessage: string;
  //project: Project;
  //emitter: EventEmitter<Project> = new EventEmitter<Project>();

  // constructor for component
  constructor(private service: ProjectsService) {}
  //on initialise
  ngOnInit() {
    //determine if the snapshot parameter exists
    /*if ( this.route.snapshot.params.hasOwnProperty("id") ){
      //snapshot, if you don't want to keep track of the parameter
      let id = Number.parseInt(this.route.snapshot.params["id"]);
    }
    else{*/
    //standard projects display
    this.getProjects();
    //}
    //observable, if we do!
    /*this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log( id );
    });*/
  }

  //function to get a list of projects
  getProjects(){
    //subscribe to the projects call
    this.service.getProjects().subscribe(data => this.projects = data);
  }

  projectSelected( e ){
    console.log( "Project was selected!" );
    console.log( e );
  }

  /*selectProject() {
    console.log( this.project );
    this.emitter.emit(this.project);
  }*/

  /*ngOnDestroy(){
    this.sub.unsubscribe();
  }*/

}
