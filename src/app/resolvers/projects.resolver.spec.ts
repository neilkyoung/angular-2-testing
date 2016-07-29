/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProjectsResolver } from './projects.resolver';

describe('Service: ProjectsResolver', () => {
  beforeEach(() => {
    addProviders([ProjectsResolver]);
  });

  it('should ...',
    inject([ProjectsResolver],
      (service: ProjectsResolver) => {
        expect(service).toBeTruthy();
      }));
});
