import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { SortOrientationComponent } from "./components/data-table/sort-orientation.component";
import { PaginationComponent } from "./components/data-table/pagination.component";

@NgModule({
    declarations: [ 
        DataTableComponent, 
        SortOrientationComponent, 
        PaginationComponent
    ],
    exports: [ 
        DataTableComponent, 
        SortOrientationComponent,
        PaginationComponent
    ],
    imports: [ CommonModule ]
})
export class SharedModule {}