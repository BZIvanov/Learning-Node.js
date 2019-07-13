import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postCount',
  pure: true
})
export class PostCountPipe implements PipeTransform {

  transform(value: any, userId: number, otherArg: any): any {
    console.log(otherArg);
    return value.reduce((acc, curr) => {
      if (curr.userId === userId) { return acc + 1; }
      return acc;
    }, 0);
  }

}
