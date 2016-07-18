/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ContentfulService } from './contentful.service';
import { HTTP_PROVIDERS } from '@angular/http';

describe('Contentful Service', () => {

  let service;

  //setup
  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    ContentfulService
  ]);

  //inject service before each test
  beforeEach(inject([ContentfulService], s => {
    service = s;
  }));

  //specs
  it('should ...', done => {
    //expect the service to exist
    expect(service).toBeTruthy();
    //make sure properties exist with correct values
    expect(service.serviceUrl).toBeTruthy();
    expect(service.space).toBeTruthy();
    expect(service.space).toBe("39s201f4ebm7");
    expect(service.accessToken).toBeTruthy();
    expect(service.accessToken).toBe("1f931ef6e32a213e871f08e9c7fab8398f0c4f6110f82fd29cc1a2b923404efa");
    expect(service.someOtherVar).toBeFalsy();
    //done
    done();
  });

  //specs
  it('should return entries', done => {
    service.getEntries( "content_type=project&order=-sys.updatedAt&include=1" ).map( data => data.json() || [] ).subscribe(x => { 
      //test response 
      expect(x.items).toBeTruthy(); //has an items property
      expect(x.data).toBeUndefined(); //check that a data proprty does not exist
      expect(x.items.length).toEqual(2); //make sure length is 2
      expect(x.items[0]).toBeTruthy(); //has a first element
      expect(x.items[0].sys.id).toBeTruthy(); //has an id
      //finished
      done();
    });
  });
});
