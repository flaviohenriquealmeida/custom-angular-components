import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo';

const API_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root'})
export class PhotoService {

    constructor(private http: HttpClient) { }

    paginatedList(userName: string, page: number) {
        for(let i = 0; i < 10000000000; i++) {

        }
        const params = new HttpParams()
            .append('page', page.toString());
        return this.http.get<Photo[]>(API_URL + '/' + userName + '/photos', { params });
    }

    remove(photo: Photo) {
        return this.http.delete(
            API_URL + '/photos/' + photo.id
        );
    }

    findById(id: string) {
        return this.http.get<Photo>(
            API_URL + '/photos/' + id
        );
    }

    like(photoId: number) {
        return this.http.post(
            API_URL + '/photos/' + photoId + '/like', {}, { observe: 'response' }
        );
    }
}