import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';

const URL: string = "http://cdn.contentful.com/spaces/";
const ACCESS_TOKEN: string = "1f931ef6e32a213e871f08e9c7fab8398f0c4f6110f82fd29cc1a2b923404efa";
const SPACE: string = "39s201f4ebm7";

@Injectable()
export class ContentfulService {

  private serviceUrl: string;

  constructor(private http: Http) {
    this.serviceUrl = URL + SPACE + "/entries/?access_token=" + ACCESS_TOKEN;
  }

  getEntries( query:string ):Observable<any>{
    return this.http.get(this.serviceUrl + '&' + query)
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
