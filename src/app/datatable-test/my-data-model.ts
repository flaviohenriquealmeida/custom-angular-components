import { PhotoService } from "../services/photo-service";
import { Inject, Injectable } from "@angular/core";
import { Photo } from "../services/photo";
import { LazyDataModel } from "../../shared/components/data-table/lazy-data-model";

@Injectable({ providedIn: 'root'})
export class MyDataModel extends LazyDataModel<Photo[]>{

    constructor(private photoService: PhotoService) {
        super(14);
    }

    load(first: number) {
        return this.photoService.paginatedList('flavio', first);
    }
}