/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ContentfulLinkPipe } from './contentful-link.pipe';

describe('Pipe: ContentfulLink', () => {
  it('create an instance', () => {
    let pipe = new ContentfulLinkPipe();
    expect(pipe).toBeTruthy();
  });
});
