import { Component, ViewChild, OnInit } from "@angular/core";
import { MyDataModel } from "./my-data-model";
import { Photo } from "../services/photo";
import { DataTableComponent } from "../../shared/components/data-table/data-table.component";

@Component({
    templateUrl: './data-table-test-component.html'
})
export class DataTableTestComponent implements OnInit {

    @ViewChild(DataTableComponent) dataTable: DataTableComponent;
    
    constructor(private dataModel: MyDataModel) {}
        
    ngOnInit(): void {
        this.dataTable.setDataModel(this.dataModel, 14, ['url']);
    }

    select(photo: Photo) {
        alert(photo.description);
    }
}