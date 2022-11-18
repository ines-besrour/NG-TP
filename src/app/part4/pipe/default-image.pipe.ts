import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.trim().length == 0){
      return "profile1.jpg"
    }
    return value;
  }

}
