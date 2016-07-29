/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProjectsResolverService } from './projects-resolver.service';

describe('Service: ProjectsResolver', () => {
  beforeEach(() => {
    addProviders([ProjectsResolverService]);
  });

  it('should ...',
    inject([ProjectsResolverService],
      (service: ProjectsResolverService) => {
        expect(service).toBeTruthy();
      }));
});
