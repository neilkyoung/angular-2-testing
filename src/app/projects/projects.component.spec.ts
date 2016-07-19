/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import {
	ComponentFixture,
	TestComponentBuilder
} from '@angular/compiler/testing';

import { provide } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ContentfulService } from '../shared/contentful.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from '../../app/routes';
import { ActivatedRoute, Router } from '@angular/router';

class MockRouter { createUrlTree() {} }
class MockActivatedRoute { }

describe('Component: Projects', () => {
  let projectComponent;

  //setup
  beforeEachProviders(() => [
    APP_ROUTER_PROVIDERS,
    ProjectsComponent,
    HTTP_PROVIDERS,
    ContentfulService,
    provide(Router, { useClass: MockRouter }),
    provide(ActivatedRoute, { useClass: MockActivatedRoute })
  ]);

  beforeEach(inject([ProjectsComponent], pc => {
    projectComponent = pc;
  }))

  

  it('should create an instance', () => {
    expect(projectComponent).toBeTruthy(); 
    expect(projectComponent.projects.length).toEqual(0);
  });

  it('should call the getProjects() method on initialisation', () => {
    spyOn(projectComponent, 'getProjects'); //spy on the get projects function and call it
    projectComponent.ngOnInit(); //initialise the component
    expect(projectComponent.getProjects).toHaveBeenCalled(); //getProjects() should have been called
  });

  it('should call getProjects() when button is clicked', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    
    tcb.
    createAsync(ProjectsComponent).then(fixture => {
      const element: HTMLElement = fixture.nativeElement;
      console.log(element)
      fixture.detectChanges();
      expect(element.querySelectorAll('span').length).toBe(2);
    });
  }));
});
