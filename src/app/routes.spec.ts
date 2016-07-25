import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

/*describe('Router tests', () => {
  var location, router;
  
  //setup
  beforeEachProviders(() => [
    APP_ROUTER_PROVIDERS,
    provide(Location, {useClass: SpyLocation}),
    provide(Router, {useClass: RootRouter}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent})
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
  });
});*/
