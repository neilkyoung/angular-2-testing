import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { APP_ROUTER_PROVIDERS } from './routes';
import { AppComponent } from './app.component';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES, PRIMARY_OUTLET, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { provide } from '@angular/core';
import { SpyLocation } from '@angular/common/testing';

describe('Router tests', () => {
  /*let location, router;
  
  //setup
  beforeEachProviders(() => [
    APP_ROUTER_PROVIDERS,
    provide(Location, { useClass: SpyLocation }),
    provide(Router, { useClass: RootRouter }),
    provide(PRIMARY_OUTLET, {useValue: AppComponent})
  ]);
  
  beforeEach(inject([Router, Location], (r, l) => {
    router = r;
    location = l;
  }));
  
  //specs
  it('Should be able to navigate to Home', done => {    
    router.navigate(['Home']).then(() => {
      expect(location.path()).toBe('/home');
      done();
    }).catch(e => done.fail(e));
  });

  it('should redirect not registered urls to Home', done => {
    router.navigateByUrl('/unknown').then(() => {
      expect(location.path()).toBe('/home');
      done();
    }).catch(e => done.fail(e));
  });*/
});
