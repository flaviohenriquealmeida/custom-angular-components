import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTableComponent } from "./datatable.component";
import { SortOrientationComponent } from "./model/sort-orientation.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { ColumnHeaderComponent } from "./column-header/column-header.component";

@NgModule({
    declarations: [ 
        DataTableComponent, 
        SortOrientationComponent, 
        PaginationComponent,
        ColumnHeaderComponent
    ],
    exports: [ 
        DataTableComponent, 
        SortOrientationComponent,
        PaginationComponent,
        ColumnHeaderComponent
    ],
    imports: [ CommonModule ]
})
export class DataTableModule {}