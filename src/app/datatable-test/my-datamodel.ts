import { PhotoService } from "../services/photo-service";
import { Inject, Injectable } from "@angular/core";

import { Photo } from "../services/photo";
import { DataModel, SortOrder } from "../shared/components/datatable/model/datamodel";

@Injectable({ providedIn: 'root'})
export class MyDataModel extends DataModel<Photo[]>{

    constructor(private photoService: PhotoService) {
        super(12, 'description', SortOrder.ASCEND);
    }

    load(page: number, row: number, sortField: string, sortOrder: SortOrder) {
        return this.photoService.paginatedList(page, row, sortField, sortOrder);
    }
}