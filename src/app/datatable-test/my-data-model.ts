import { PhotoService } from "../services/photo-service";
import { Inject, Injectable } from "@angular/core";
import { Photo } from "../services/photo";
import { LazyDataModel, SortOrder } from "../shared/components/data-table/lazy-data-model";

@Injectable({ providedIn: 'root'})
export class MyDataModel extends LazyDataModel<Photo[]>{

    constructor(private photoService: PhotoService) {
        super(12, 'description', SortOrder.ASCEND);
    }

    load(page: number, row: number, sortField: string, sortOrder: SortOrder) {
        return this.photoService.paginatedList(page, row, sortField, sortOrder);
    }
}