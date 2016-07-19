import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/";
import { ProjectsComponent } from "./projects/";
import { ProjectDetailsComponent } from "./project-details/";
import { RacesComponent } from "./races/";

export const routes:RouterConfig = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:slug', component: ProjectDetailsComponent },
    { path: 'races', component: RacesComponent },
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '/', terminal: true },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
