import { Component, ViewChild, OnInit } from "@angular/core";
import { MyDataModel } from "./my-data-model";
import { Photo } from "../services/photo";
import { DataTableComponent } from "../shared/components/data-table/data-table.component";

@Component({
    templateUrl: './data-table-test-component.html'
})
export class DataTableTestComponent  {
 
    constructor(private dataModel: MyDataModel) {}
        
    select(photo: Photo) {
        alert(`Do some stuff with ${photo.description}`);
    }
}