import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTableComponent } from "./components/data-table/data-table.component";

@NgModule({
    declarations: [ DataTableComponent ],
    exports: [ DataTableComponent ],
    imports: [ CommonModule ]
})
export class SharedModule {}