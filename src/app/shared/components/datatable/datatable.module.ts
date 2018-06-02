import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { DataTableComponent } from "./datatable.component";
import { SortOrientationComponent } from "./model/sort-orientation.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { ColumnHeaderComponent } from "./column-header/column-header.component";
import { ColumnFilterPipe } from "./pipes/column-filter.pipe";


@NgModule({
    declarations: [ 
        DataTableComponent, 
        SortOrientationComponent, 
        PaginationComponent,
        ColumnHeaderComponent,
        ColumnFilterPipe
    ],
    exports: [ 
        DataTableComponent, 
        SortOrientationComponent,
        PaginationComponent,
        ColumnHeaderComponent,
        ColumnFilterPipe
    ],
    imports: [ CommonModule, FormsModule ]
})
export class DataTableModule {}