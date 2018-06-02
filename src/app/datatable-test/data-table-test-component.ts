import { Component, ViewChild, OnInit } from "@angular/core";
import { MyDataModel } from "./my-datamodel";
import { Photo } from "../services/photo";


@Component({
    templateUrl: './data-table-test-component.html'
})
export class DataTableTestComponent  {
 
    constructor(private dataModel: MyDataModel) {}
        
    select(photo: Photo) {
        alert(`Do some stuff with ${photo.description}`);
    }
}