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


//Map<String,Object> filters) {
// load(first:number, pageSize: number, sortField: string, sortOrder: SortOrder): Observable<T>;

export enum SortOrder {
    ASCEND,
    DESCEND
}

 