import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentfulLink'
})
export class ContentfulLinkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    return null;
  }

}
