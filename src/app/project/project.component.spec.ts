/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TestComponentBuilder, ComponentFixture } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { ActivatedRoute, Router } from '@angular/router';
import { provide } from '@angular/core';
import { LocationStrategy } from '@angular/common';

class MockRouter { createUrlTree() {} }
class MockActivatedRoute { }
class MockLocationStrategy { }

describe('Component: Project', () => {

	let fixture: ComponentFixture<ProjectComponent>

	beforeEachProviders(() => [
		provide(LocationStrategy, {useClass: MockLocationStrategy}),
		provide(Router, { useClass: MockRouter }),
		provide(ActivatedRoute, { useClass: MockActivatedRoute })
	]);

	beforeEach(async(inject([TestComponentBuilder], tcb =>
      tcb.createAsync(ProjectComponent)
        .then(f => fixture = f)
    )));

	it('should create an instance', () => {
		let component = new ProjectComponent();
		expect(component).toBeTruthy();
	});

	//check the clicked event
	it('should have all its properties', async(() => {
		// given a component instance with a pony input initialized
		let projectComponent = fixture.componentInstance;
		projectComponent.project = { id: 'project-1', client: 'Fox', name: 'Ice Age Quiz', image: "test.png", slug: 'ice-age-quiz' };
		// when we trigger the change detection
		fixture.detectChanges();
		// then we should have an image with the correct source attribute
		// depending of the pony color
		let element = fixture.nativeElement;
		//check that the project has an id
		expect(element.querySelector('p:first-child').textContent).toBe('Id: project-1');
		//check that the project has a client name
		expect(element.querySelector('p:nth-child(2)').textContent).toBe('Client: Fox');
		//check that the project has a project name
		expect(element.querySelector('p:nth-child(3)').textContent).toBe('Project: Ice Age Quiz');
		//check that an element does not exist
		expect(element.querySelector('.project-something')).toBe(null);
		//check to see if the element exists
		expect(element.querySelector('.project-image')).not.toBe(null);
		//make sure that the image has been populated
		expect(element.querySelector('.project-image').getAttribute('src')).toBe('test.png');
		//check for slug
		expect(element.querySelector('.project-link').getAttribute('ng-reflect-router-link')).toBe('/projects/ice-age-quiz');
	}));

	//check the clicked event
	it('should emit an event on project name click', async(() => {
		// given a component instance with a pony input initialized
		let projectComponent = fixture.componentInstance;
		projectComponent.project = { id: 'project-1', client: 'Fox', name: 'Ice Age Quiz', image: "test.png", slug: 'ice-age-quiz' };
		// we fake the event emitter with a spy
    	spyOn(projectComponent.projectSelected, 'emit');
    	// when we click on the pony
        let element = fixture.nativeElement;
        let link = element.querySelector('.project-event-link');
        link.dispatchEvent(new Event('click'));
        // and we trigger the change detection
        fixture.detectChanges();
        //make sure the event exists
		expect( projectComponent.projectSelected ).toBeDefined();
		//check for undefined event
		expect( projectComponent.projectEvent ).not.toBeDefined();
        // then the event emitter should have fired an event
        expect(projectComponent.projectSelected.emit).toHaveBeenCalled();
	}));
});
