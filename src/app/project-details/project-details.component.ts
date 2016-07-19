import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-project-details',
  templateUrl: 'project-details.component.html',
  styleUrls: ['project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  slug: string;

  constructor( private route: ActivatedRoute ) {
    if ( this.route.snapshot.params.hasOwnProperty("slug") ){
      //snapshot, if you don't want to keep track of the parameter
      let id = this.route.snapshot.params["slug"];

      this.slug = id;
      console.log(this.slug);
    }

  }

  ngOnInit() {
  }

}
