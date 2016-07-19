import { Injectable } from '@angular/core';
import { ContentfulService } from '../shared/contentful.service';
import { Project } from './project';

const PROJECTS_QUERY: string = "content_type=project&order=-sys.updatedAt&include=1";

@Injectable()
export class ProjectsService {
  //contentful service to handle data from api
  constructor(private service:ContentfulService) {}

  //get projects from contentful
  getProjects(){
    //call the contentful service and return projects
    return this.service.getEntries( PROJECTS_QUERY )
      .map( data => data.json() || [] )
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
            p.client = this.service.getLink( project.fields.client.sys.id, projects["includes"].Entry ).clientName;
            p.name = project.fields.projectName;
            p.image = this.service.getLink( project.fields.projectHeroImage.sys.id, projects["includes"].Asset ).file.url;

            //push to the projects array
            result.push( p );
          });
        }
        return result;
      }); // get response from server
  }
}
