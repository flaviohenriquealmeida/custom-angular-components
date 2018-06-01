import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { LazyDataModel, SortOrder } from "./lazy-data-model";

@Component({
    selector: 'my-data-table',
    templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {

    @Input() rows = 5;
    @Input() title: string = '';
    @Output() onItemSelect = new EventEmitter();

    private columnTitles: string[] = [];
    private currentPage = 1;
    private dataModel: LazyDataModel<any>;
    private dataList: any[] = [];
    private dataProperties: string[] = [];
    private ignoredProperties = [];
    private pages = 0;
    private rowCount = 0;

    ngOnInit(): void {
        this.pages = Math.ceil(this.rowCount/this.rows);
        this.load(1);
    }

    load(page) {
        this.currentPage = page;
        this.loadData();
    }

    selectItem(item) {
        this.onItemSelect.emit(item);
    }

    setDataModel(dataModel: LazyDataModel<any>, rowCount: number, ignoredProperties: string[]) {
        this.dataModel = dataModel;
        this.rowCount = rowCount;
        this.ignoredProperties = ignoredProperties;
    }

    private extractDataProperties(data: any) {
        this.dataProperties = Object.getOwnPropertyNames(data)
            .filter(property => !this.ignoredProperties.includes(property));
        console.log(this.dataProperties);
    }

    private isUpperCase(letter: string) {
        return /[A-Z]/.test(letter);
    }

    private loadData() {
        this.dataModel.load(this.currentPage)
            .subscribe(dataList => {
                this.dataList = dataList;
                this.extractDataProperties(dataList[0]);
                this.mountColumnTitles();
            });
    }

    private mountColumnTitles() {
        this.columnTitles = this.dataProperties.map(property => {
            let title = '';
            for (let letter of property) {
                if (this.isUpperCase(letter)) {
                    title += ' ' + letter.toLowerCase();
                } else {
                    title += letter;
                }
            }
            return title.trim();
        });
    }
}
/*
var myString = "UmTesteQualquer";
var myRegexp = /([A-Z])+/g;
while ((match = myRegexp.exec(myString)) != null) {
 myString.replace(match[0], " " + match[0].toLowerCase()); 
}
*/