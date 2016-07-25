/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject, addProviders
} from '@angular/core/testing';

/*import {
	ComponentFixture,
	TestComponentBuilder
} from '@angular/compiler/testing';*/

import { provide } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from '../projects.service';
import { Project } from '../project/project';

let project1 = new Project();
let project2 = new Project();

// we create a mock contentful service as a dependancy
class MockProjectsService{
  getProjects(){
    return [project1, project2]
  }
}

describe('Component: Projects', () => {
  let projectComponent, projectsService;

  //add the providers
  beforeEach(() => addProviders([
    { provide: ProjectsService, useClass: MockProjectsService },
    ProjectsComponent
  ]));

  //should create an instance of the service
  it('should create the component...', inject([ProjectsComponent], pc => {
    //expect the service to exist
    expect(pc).toBeTruthy();
    expect(pc.projects.length).toEqual(0);
  }));

  //should create an instance of the service
  it('should call the getProjects() method on initialisation...', inject([ProjectsComponent], pc => {
    //spy on the get projects function
    spyOn(pc, 'getProjects'); 
    //initialise the component
    pc.ngOnInit(); 
    //getProjects() should have been called
    expect(pc.getProjects).toHaveBeenCalled(); 

    expect(pc.projects.length).toEqual(0);
  }));

});



/*describe('Component: Projects', () => {
  let projectComponent;


  it('should call getProjects() when button is clicked', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

    tcb.
    createAsync(ProjectsComponent).then(fixture => {
      const element: HTMLElement = fixture.nativeElement;
      console.log(element)
      fixture.detectChanges();
      expect(element.querySelectorAll('span').length).toBe(2);
    });
  }));
});*/
