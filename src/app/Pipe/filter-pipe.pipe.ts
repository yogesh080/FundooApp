import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {


  transform(value: any, args: any) {
    return value.filter((note: any) => {
      return note.title.includes(args) | note.description.includes(args);
      

    })
    
    console.log("pipe")
  }
}
