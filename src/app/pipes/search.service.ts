import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], searchTerm: string): any[] {
    if (!data || searchTerm === undefined || searchTerm === null) {
      return data;
    }
    const searchTermString = searchTerm.toString().toLowerCase();
    return data.filter((item) => {
      if (item.first_name || item.last_name) {
        const fullName = (item.first_name + ' ' + item.last_name).toLowerCase();
        return (
         fullName.includes(searchTermString) 
        );
      }

      return data;
    });
  }
}
