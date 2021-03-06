import { Injectable } from '@angular/core';
import { ProjectsService } from '../projects/projects.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Project } from '../project/project';

@Injectable()
export class ProjectsResolver implements Resolve<any> {

	constructor(
		private service: ProjectsService
	) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		return this.service.getProjects();
	}

}
