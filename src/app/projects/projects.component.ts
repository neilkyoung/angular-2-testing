import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-projects',
  providers: [ProjectsService],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css']
})
export class ProjectsComponent implements OnInit {
  //private sub: any;
  private projects: Array<Project> = [];
  private errorMessage: string;

  // constructor for component
  constructor(private route: ActivatedRoute, private service: ProjectsService) {}
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

  /*ngOnDestroy(){
    this.sub.unsubscribe();
  }*/

}
