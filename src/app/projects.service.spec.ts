/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject, addProviders
} from '@angular/core/testing';

import { ContentfulService } from './shared/contentful.service';
import { ProjectsService } from './projects.service';
import { Http } from '@angular/http';

// we create a mock contentful service as a dependancy
class MockContentfulService{
	
}

describe('Projects Service', () => {
	//add the providers
	beforeEach(() => addProviders([
		{ provide: ContentfulService, useClass: MockContentfulService }, //mock the contentful service
		ProjectsService
	]));
  	//should create an instance of the service
  	it('should create the service...', inject([ProjectsService], service => {
		//expect the service to exist
		expect(service).toBeTruthy();
	}));
  	//the getProjects() function should be callable
  	it('should get an array of projects...', inject([ProjectsService], service => {
		 //spy on the getProjects function
		spyOn(service, 'getProjects');
		 //call the getProjects function
		service.getProjects();
		//getProjects() should have been called
    	expect(service.getProjects).toHaveBeenCalled(); 
	}));

});
