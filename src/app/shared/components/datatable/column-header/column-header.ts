import { SortOrder } from "../model/datamodel";

export interface ColumnHeader {
    sortOrder: SortOrder;
    sortField: string;
    title: string;
}