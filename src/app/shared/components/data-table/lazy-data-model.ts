import { Observable } from "rxjs";

export abstract class LazyDataModel<T> {

    private rowCount: number = 0;
    
    constructor(rowCount: number) {
        this.rowCount = rowCount;
    }

    abstract load(first:number): Observable<T>;

    getRowCount() {
        return this.rowCount;
    }
}

export enum SortOrder {
    ASCEND,
    DESCEND
}

 