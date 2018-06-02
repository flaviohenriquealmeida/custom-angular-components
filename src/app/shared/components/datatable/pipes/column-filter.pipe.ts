import { Pipe, PipeTransform } from '@angular/core'
import { Photo } from '../../../../services/photo';
import { ColumnHeader } from '../column-header/column-header';

@Pipe({ name: 'columnFilter' })
export class ColumnFilterPipe implements PipeTransform {

    transform(photos: Photo[], filter: ColumnHeader): Photo[] {
        if (!filter) return photos;

        console.log('filter value', filter);
        
        return photos.filter(photo => {
            let value = photo[filter.filterField];
            if (typeof (value) == 'number') {
                value = value.toString();
            }
            if (typeof (value) == 'boolean') {
                value = value.toString();
            }
            if (typeof (value) == 'object') {
                value = value.toString();
            }
            return value.toLowerCase().includes(filter.filterValue.toLowerCase())
        });
    }
}