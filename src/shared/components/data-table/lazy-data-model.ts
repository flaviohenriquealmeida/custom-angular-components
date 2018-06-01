import { Observable } from "rxjs";

//Map<String,Object> filters) {
// load(first:number, pageSize: number, sortField: string, sortOrder: SortOrder): Observable<T>;
export interface LazyDataModel<T> {

    load(first:number): Observable<T>;
}

export enum SortOrder {
    ASCEND,
    DESCEND
}


 