import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

const URL: string = "http://cdn.contentful.com/spaces/";
const ACCESS_TOKEN: string = "1f931ef6e32a213e871f08e9c7fab8398f0c4f6110f82fd29cc1a2b923404efa";
const SPACE: string = "39s201f4ebm7";

@Injectable()
export class FakeContentfulService {

  private serviceUrl: string;
  private projects;

  constructor(private http: Http) {
    this.serviceUrl = URL + SPACE + "/entries/?access_token=" + ACCESS_TOKEN;
  }

  getEntries( query:string ):Observable<any>{
    return Observable.of({
      "sys": {
        "type": "Array"
      },
      "total": 2,
      "skip": 0,
      "limit": 100,
      "items": [
        {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "39s201f4ebm7"
              }
            },
            "id": "5vrJKa1RJYkaigISowQCsk",
            "type": "Entry",
            "createdAt": "2016-05-11T13:25:50.662Z",
            "updatedAt": "2016-05-25T09:19:47.921Z",
            "revision": 2,
            "contentType": {
              "sys": {
                "type": "Link",
                "linkType": "ContentType",
                "id": "project"
              }
            },
            "locale": "en-GB"
          },
          "fields": {
            "projectName": "Ice Age Character Quiz",
            "projectSlug": "ice-age-character-quiz",
            "projectHeroImage": {
              "sys": {
                "type": "Link",
                "linkType": "Asset",
                "id": "6t6hUOa2I0c4QOQM668mUQ"
              }
            },
            "client": {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "6dluix9tAIeSc0kWWSSU4i"
              }
            },
            "projectData": {
              "project-data": {}
            }
          }
        },
        {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "39s201f4ebm7"
              }
            },
            "id": "dRbWyP56JUGum8yaSkcSo",
            "type": "Entry",
            "createdAt": "2016-05-17T13:44:18.073Z",
            "updatedAt": "2016-05-17T13:44:18.073Z",
            "revision": 1,
            "contentType": {
              "sys": {
                "type": "Link",
                "linkType": "ContentType",
                "id": "project"
              }
            },
            "locale": "en-GB"
          },
          "fields": {
            "projectName": "Ice Age Pool",
            "projectHeroImage": {
              "sys": {
                "type": "Link",
                "linkType": "Asset",
                "id": "6qEfAzikF2Mkc48SScwCOQ"
              }
            },
            "client": {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "6dluix9tAIeSc0kWWSSU4i"
              }
            }
          }
        }
      ],
      "includes": {
        "Entry": [
          {
            "sys": {
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "39s201f4ebm7"
                }
              },
              "id": "6dluix9tAIeSc0kWWSSU4i",
              "type": "Entry",
              "createdAt": "2016-05-11T13:24:39.213Z",
              "updatedAt": "2016-05-11T13:24:39.213Z",
              "revision": 1,
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "client"
                }
              },
              "locale": "en-GB"
            },
            "fields": {
              "clientName": "Fox International"
            }
          }
        ],
        "Asset": [
          {
            "sys": {
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "39s201f4ebm7"
                }
              },
              "id": "6qEfAzikF2Mkc48SScwCOQ",
              "type": "Asset",
              "createdAt": "2016-05-17T13:44:01.029Z",
              "updatedAt": "2016-05-17T13:44:01.029Z",
              "revision": 1,
              "locale": "en-GB"
            },
            "fields": {
              "title": "Ice Age Pool",
              "file": {
                "url": "//images.contentful.com/39s201f4ebm7/6qEfAzikF2Mkc48SScwCOQ/53edb68f5d0f4f59287d756b54d5238b/Screen_Shot_2016-05-17_at_14.47.19.png",
                "details": {
                  "size": 3925972,
                  "image": {
                    "width": 2024,
                    "height": 1486
                  }
                },
                "fileName": "Screen Shot 2016-05-17 at 14.47.19.png",
                "contentType": "image/png"
              }
            }
          },
          {
            "sys": {
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "39s201f4ebm7"
                }
              },
              "id": "6t6hUOa2I0c4QOQM668mUQ",
              "type": "Asset",
              "createdAt": "2016-05-03T14:39:31.846Z",
              "updatedAt": "2016-05-03T14:39:31.846Z",
              "revision": 1,
              "locale": "en-GB"
            },
            "fields": {
              "title": "Ice Age Character Quiz Image",
              "file": {
                "url": "//images.contentful.com/39s201f4ebm7/6t6hUOa2I0c4QOQM668mUQ/238a8ab6647fbc9da43e1a42b488d3ab/IceAge_Quiz_Tablet_1024x768_1.jpg",
                "details": {
                  "size": 836894,
                  "image": {
                    "width": 1024,
                    "height": 918
                  }
                },
                "fileName": "IceAge_Quiz_Tablet_1024x768_1.jpg",
                "contentType": "image/jpeg"
              }
            }
          }
        ]
      }
    });

  }


}
