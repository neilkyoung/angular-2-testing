import { Injectable } from '@angular/core';
import { ProjectsService } from './projects.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Project } from './project/project';

@Injectable()
export class ProjectsResolverService {

	constructor(
		private service: ProjectsService
	) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Array<any> {
		return this.service.getProjects();
	}

}
