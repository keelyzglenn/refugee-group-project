import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(string: string){
    return string.replace(/amp;/g,'');
  }

}
