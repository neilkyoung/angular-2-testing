import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContentfulService {

  private serviceUrl: string;
  private url: string = "http://cdn.contentful.com/spaces/";
  private accessToken: string = "1f931ef6e32a213e871f08e9c7fab8398f0c4f6110f82fd29cc1a2b923404efa";
  private space: string = "39s201f4ebm7";

  constructor(private http: Http) {
    this.serviceUrl = this.url + this.space + "/entries/?access_token=" + this.accessToken;
  }
  
  getEntries( query:string ):Observable<any>{
    return this.http.get(this.serviceUrl + '&' + query)
                    .catch(this.handleError);
  }

  //handle grabbing links for includes in contentful response
  getLink(id: string, includes: Array<any>) {
    if ( id && includes ){
      for ( let link of includes ){
        if ( id === link.sys.id ){
          return link.fields;
        }
      }
    }
    else{
      return false;
    }
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
