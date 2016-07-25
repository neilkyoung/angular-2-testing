/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProjectDetailsComponent } from './project-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { provide } from '@angular/core';

class MockRouter { createUrlTree() {} }
class MockActivatedRoute { }

describe('Component: ProjectDetails', () => {
  let projectDetailsComponent;

  //setup
  beforeEachProviders(() => [
    ProjectDetailsComponent,
    provide(Router, { useClass: MockRouter }),
    provide(ActivatedRoute, { useClass: MockActivatedRoute })
  ]);

  beforeEach(inject([ProjectDetailsComponent], pdc => {
    projectDetailsComponent = pdc;
  }))

  /*it('should create an instance', () => {
    expect(projectDetailsComponent).toBeTruthy();
  });*/
});
