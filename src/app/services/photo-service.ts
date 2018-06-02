import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo';
import { SortOrder } from '../shared/components/datatable/model/datamodel';

const API_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root'})
export class PhotoService {

    constructor(private http: HttpClient) { }

    paginatedList(page: number, rows: number, sortField: string, sortOrder: SortOrder) {
       
        const params = new HttpParams()
            .append('page', page.toString())
            .append('sortField', sortField)
            .append('sortOrder',  sortOrder.valueOf().toString())
            .append('rows', rows.toString());
            
        return this.http.get<Photo[]>(API_URL + '/photos', { params });
    }
}