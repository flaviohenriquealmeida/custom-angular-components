import { Observable } from "rxjs";

export abstract class DataModel<T> {
    
    constructor(
        private rowCount: number,
        private startingSortField: string, 
        private startingSortOrder) {}

    abstract load(page:number, rows: number, sortField: string, sortOrder: SortOrder): Observable<T>;

    getRowCount() {
        return this.rowCount;
    }

    getStartingSortField() {
        return this.startingSortField;
    }

    getStartingSortOrder() {
        return this.startingSortOrder;
    }
}

export enum SortOrder {
    ASCEND,
    DESCEND
}

 