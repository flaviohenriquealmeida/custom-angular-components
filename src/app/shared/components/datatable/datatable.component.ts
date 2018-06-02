import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";

import { ColumnHeader } from "./column-header/column-header";
import { DataModel, SortOrder } from "./model/datamodel";


@Component({
    selector: 'my-datatable',
    templateUrl: './datatable.component.html'
})
export class DataTableComponent implements OnInit {

    @Input() dataModel: DataModel<any>;
    @Input() ignoredFields: string[] = [];
    @Input() rows: number = 5;
    @Input() title: string = '';
    @Output() onItemSelect: EventEmitter<any> = new EventEmitter<any>();

    private currentPage: number = 1;
    private selectedColumnHeader: ColumnHeader;
    private dataList: any[] = [];
    private fields: string[] = [];
    private pages: number = 0;
    private firstLoad: boolean = true;

    ngOnInit(): void {
        this.calculateNumberOfPages();
        this.loadFirstPage();
    }

    load(page: number, rows: number = this.rows,
        sortField: string = this.dataModel.getStartingSortField(),
        sortOrder: SortOrder = this.dataModel.getStartingSortOrder()): void {

        console.log(page, rows, sortField, sortOrder);
        this.currentPage = page;
        this.dataModel.load(page, rows, sortField, sortOrder)
            .subscribe(dataList => {
                this.dataList = dataList;
                if (this.firstLoad) {
                    this.firstLoad = false;
                    const sampleObject = dataList[0];
                    this.extractFieldsFromSampleObject(sampleObject);
                }
            });
    }

    selectItem(item) {
        this.onItemSelect.emit(item);
    }

    sortBy(columnHeader: ColumnHeader) {
        this.selectedColumnHeader = columnHeader;
        this.load(this.currentPage, this.rows, this.selectedColumnHeader.sortField, this.selectedColumnHeader.sortOrder);
    }

    private calculateNumberOfPages(): void {
        this.pages = Math.ceil(this.dataModel.getRowCount() / this.rows);
    }

    private extractFieldsFromSampleObject(data: Object) {
        this.fields = Object.getOwnPropertyNames(data)
            .filter(field => !this.ignoredFields.includes(field));
    }

    private loadFirstPage() {
        this.load(1, this.rows);
    }
}

/*
var myString = "UmTesteQualquer";
var myRegexp = /([A-Z])+/g;
while ((match = myRegexp.exec(myString)) != null) {
 myString.replace(match[0], " " + match[0].toLowerCase()); 
}
*/