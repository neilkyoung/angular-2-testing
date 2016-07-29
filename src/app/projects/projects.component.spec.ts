/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject, addProviders
} from '@angular/core/testing';

//needed for testing
import { TestComponentBuilder, ComponentFixture } from '@angular/core/testing';
import { provide } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

import { ContentfulService } from '../shared/contentful.service';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { Project } from '../project/project';
import { ProjectComponent } from '../project/project.component';

// we create a mock contentful and projects services as dependancies
class MockRouter { createUrlTree() {} }
class MockActivatedRoute { }
class MockLocationStrategy { }
class MockProjectsService{ getProjects(){} }
class MockContentfulService{ getEntries(){} }

describe('Component: Projects', () => {
  let fixture: ComponentFixture<ProjectsComponent>;

  let projectComponent, projectsService;

  //create some projects
  let project1 = new Project(  );
  project1.id = 'project-1';
  project1.client = 'Fox';
  project1.name = 'Ice Age Quiz'; 
  project1.image = "test.png"; 
  project1.slug = 'ice-age-quiz';
  
  let project2 = new Project(  );
  project2.id = 'project-2';
  project2.client = 'HBO';
  project2.name = 'UK Website'; 
  project2.image = "test.png"; 
  project2.slug = 'hbo-uk-website';

  //providers for the project component
  beforeEachProviders(() => [
    provide(LocationStrategy, {useClass: MockLocationStrategy}),
    provide(Router, { useClass: MockRouter }),
    provide(ActivatedRoute, { useClass: MockActivatedRoute })
  ]);

  //add the providers for the propjects component
  beforeEach(() => addProviders([
    { provide: ContentfulService, useClass: MockContentfulService },
    { provide: ProjectsService, useClass: MockProjectsService },
    ProjectsComponent
  ]));

  //fixtures
  beforeEach(async(inject([TestComponentBuilder], (tcb) => {
    tcb.createAsync(ProjectsComponent)
        .then(f => fixture = f);
  })));

  //should create an instance of the service
  it('should create the component...', inject([ProjectsComponent], projectComponent => {
    //expect the service to exist
    expect(projectComponent).toBeTruthy();
    expect(projectComponent.projects.length).toEqual(0);
  }));

  //should create an instance of the service
  it('should call the getProjects() method on initialisation...', inject([ProjectsComponent], projectComponent => {
    //spy on the get projects function
    //spyOn(projectComponent, 'getProjects'); 
    //initialise the component
    //projectComponent.ngOnInit(); 
    //getProjects() should have been called
    //expect(projectComponent.getProjects).toHaveBeenCalled(); 
  }));

  it('should have a list of projects', () => {
      // given a component instance with a race input initialized
      let projectsComponent = fixture.componentInstance;
      //spy on the get projects function
      spyOn(projectsComponent, 'getProjects').and.returnValue([project1, project2]);
      //initialise the component
      projectsComponent.getProjects(); 
      //getProjects() should have been called
      expect(projectsComponent.getProjects).toHaveBeenCalled(); 
      //populate the projects manually
      projectsComponent.projects = [project1, project2];
      // when we trigger the change detection
      fixture.detectChanges();
      // then we should have a name with the race name
      let element = fixture.nativeElement;
      // and a list of projects
      let projects = fixture.debugElement.queryAll(By.directive(ProjectComponent));
      // make sure the projects have been populated
      expect(projects.length).not.toBe(0);
      //expect total projects to be 2
      expect(projects.length).toBe(2);
  });

  it('should populate projects', () => {
    // given a component instance with a race input initialized
    let projectsComponent = fixture.componentInstance;
    //spy on the get projects function
    spyOn(projectsComponent, 'getProjects').and.returnValue([project1, project2]);
    //initialise the component
    projectsComponent.getProjects(); 
    //getProjects() should have been called
    expect(projectsComponent.getProjects).toHaveBeenCalled(); 
    //populate the projects manually
    projectsComponent.projects = [project1, project2];
    // when we trigger the change detection
    fixture.detectChanges();
    // and a list of projects
    let projects = fixture.debugElement.queryAll(By.directive(ProjectComponent));
    // we can check if the pony is correctly initialized
    let project = projects[0].componentInstance.project;
    //check the project name
    expect(project.name).toBe('Ice Age Quiz');
  });

  //determine if no project text is being displayed/hidden
  it('should toggle no project text', () => {
      // given a component instance with a race input initialized
      let projectsComponent = fixture.componentInstance;
      //spy on the get projects function
      spyOn(projectsComponent, 'getProjects').and.returnValue([project1, project2]);
      //initialise the component
      projectsComponent.getProjects(); 
      //getProjects() should have been called
      expect(projectsComponent.getProjects).toHaveBeenCalled(); 
      //populate the projects manually
      projectsComponent.projects = [project1, project2];
      // when we trigger the change detection
      fixture.detectChanges();
      // then we should have a name with the race name
      let element = fixture.nativeElement;
      //make sure it does not display the no projects text
      expect(element.querySelector('.no-projects')).toBeNull();
      // and a list of projects
      let projects = fixture.debugElement.queryAll(By.directive(ProjectComponent));
      // we can check if the pony is correctly initialized
      let project = projects[0].componentInstance.project;
      //check the project name
      expect(project.name).toBe('Ice Age Quiz');
      //clear the projects
      projectsComponent.projects = [];
      // when we trigger the change detection
      fixture.detectChanges();
      //make sure it displays the no projects text
      expect(element.querySelector('.no-projects')).not.toBeNull();
  });

});