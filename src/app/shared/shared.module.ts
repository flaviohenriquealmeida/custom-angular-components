import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DataTableModule } from "./components/datatable/datatable.module";

@NgModule({
    
    imports: [ DataTableModule ],
    exports: [ DataTableModule ] 
})
export class SharedModule {}