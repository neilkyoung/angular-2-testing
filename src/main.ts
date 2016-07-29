import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/routes';
import { ContentfulService } from './app/shared/contentful.service';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { ProjectsResolverService } from './app/projects-resolver.service';
import { ProjectsService } from "./app/projects.service";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
  	provideForms(),
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    ContentfulService,
    ProjectsResolverService,
    ProjectsService
])
.then(
    // and play with the returned injector
    appRef => playWithInjector(appRef.injector)
)
.catch(err => console.error(err));

function playWithInjector(inj) {
    console.log(inj.get(ContentfulService));
}
