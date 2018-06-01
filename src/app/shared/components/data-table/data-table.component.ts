import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { LazyDataModel, SortOrder } from "./lazy-data-model";
import { PropertyBindingType } from "@angular/compiler";

@Component({
    selector: 'my-data-table',
    templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {

    @Input() dataModel: LazyDataModel<any>;
    @Input() ignoredDataProperties: string[] = [];
    @Input() rows = 5;
    @Input() title: string = '';
    @Output() onItemSelect = new EventEmitter();

    private columnTitles: ColumnTitle[] = [];
    private currentPage = 1;
    private currentSortOrder: SortOrder;
    private currentSortField: string;
    private dataList: any[] = [];
    private dataProperties: string[] = [];
    private pages = 0;
    private firstLoad = true;

    ngOnInit(): void {
        this.pages = this.calculatePages();
        this.currentSortOrder =  this.dataModel.getStartingSortOrder();
        this.currentSortField = this.dataModel.getStartingSortField();
        this.load(1);
    }

    load(page: number) {
        this.currentPage = page;
        this.dataModel.load(this.currentPage, this.rows, this.currentSortField, this.currentSortOrder)
            .subscribe(dataList => {
                this.dataList = dataList;
                if (this.firstLoad) {
                    this.firstLoad = false;
                    this.extractColumnProperties(dataList[0]);
                    this.createColumnTitles();
                }
            });
    }

    selectItem(item) {
        this.onItemSelect.emit(item);
    }

    sortBy(choosenTitle: ColumnTitle) {
        choosenTitle.sortOrder = this.getNewSortOrder(choosenTitle);
        this.updateColumnTitleListWith(choosenTitle);
        this.currentSortField = choosenTitle.sortProperty;
        this.currentSortOrder = choosenTitle.sortOrder;
        this.load(this.currentPage);

    }

    private calculatePages() {
        return Math.ceil(this.dataModel.getRowCount() / this.rows);
    }

    private getNewSortOrder(title: ColumnTitle) {
        return title.sortOrder == SortOrder.ASCEND 
            ? SortOrder.DESCEND
            : SortOrder.ASCEND;
    }

    private extractColumnProperties(data: any) {
        this.dataProperties = Object.getOwnPropertyNames(data)
            .filter(property => !this.ignoredDataProperties.includes(property));
    }

    private isUpperCase(letter: string) {
        return /[A-Z]/.test(letter);
    }

    private createColumnTitles() {
        this.columnTitles = this.dataProperties
            .map(property => {
                let title = '';
                for (let letter of property) {
                    this.isUpperCase(letter)
                        ? title += ' ' + letter.toLowerCase()
                        : title += letter;
                }
                return {
                    sortOrder: SortOrder.ASCEND,
                    sortProperty: property,
                    name: title.trim()
                };
            });
    }
    
    private updateColumnTitleListWith(newTitle: ColumnTitle) {
        this.columnTitles = this.columnTitles.map(title =>
            title.sortProperty == newTitle.sortProperty
                ? newTitle
                : title
        );
    }
}

interface ColumnTitle {
    sortOrder: SortOrder;
    sortProperty: string;
    name: string;
}

/*
var myString = "UmTesteQualquer";
var myRegexp = /([A-Z])+/g;
while ((match = myRegexp.exec(myString)) != null) {
 myString.replace(match[0], " " + match[0].toLowerCase()); 
}
*/