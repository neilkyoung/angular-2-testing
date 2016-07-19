import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../shared/contentful.service';
import { Project } from './project'

@Component({
  moduleId: module.id,
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css']
})
export class ProjectsComponent implements OnInit {
  //private sub: any;
  private projects: Array<Project> = [];
  private errorMessage: string;


  // constructor for component
  constructor(private route: ActivatedRoute, private service: ContentfulService) {}
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

  getProjects(){
    //projects query
  const projectsQuery = "content_type=project&order=-sys.updatedAt&include=1";
  //call the contentful service and return projects
  this.service.getEntries( projectsQuery )
  .map( data => data.json() || [] ) // get response from server
  .map((projects: Array<Project>): Array<Project> => {
    //create empty array to hold projects
    let result:Array<Project> = [];
    //determine if projects are returned
    if (projects) {
      //we need to pre-process the array for projects and then subscribe to the observable
      projects["items"].forEach( project => {
        //create a new project object
        let p = new Project();
        //assign the proprties
        p.id = project.sys.id;
        p.client = this.getLink( project.fields.client.sys.id, projects["includes"].Entry ).clientName;
        p.name = project.fields.projectName;
        p.image = this.getLink( project.fields.projectHeroImage.sys.id, projects["includes"].Asset ).file.url;

        //push to the projects array
        result.push( p );
      });
    }
    return result;
  })
  .subscribe(data => this.projects = data); // this subscribes the returned result array from pre-processing to the projects property
  }

  //handle grabbing links for includes in contentful response
  private getLink(id: string, includes: Array<any>) {
  if ( id && includes ){
    for ( let link of includes ){
      if ( id === link.sys.id ){
        return link.fields;
      }
    }
  }
  else{
    return false;
  }
  }

  /*ngOnDestroy(){
    this.sub.unsubscribe();
  }*/

}
