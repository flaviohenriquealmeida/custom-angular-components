import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { SortOrientationComponent } from "./components/data-table/sort-orientation.component";

@NgModule({
    declarations: [ 
        DataTableComponent, 
        SortOrientationComponent ],
    exports: [ 
        DataTableComponent, 
        SortOrientationComponent 
    ],
    imports: [ CommonModule ]
})
export class SharedModule {}