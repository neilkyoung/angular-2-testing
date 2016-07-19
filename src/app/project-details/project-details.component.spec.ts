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

describe('Component: ProjectDetails', () => {
  it('should create an instance', () => {
    let component = new ProjectDetailsComponent();
    expect(component).toBeTruthy();
  });
});
