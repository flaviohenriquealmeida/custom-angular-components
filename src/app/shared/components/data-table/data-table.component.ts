import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { LazyDataModel, SortOrder } from "./lazy-data-model";
import { PropertyBindingType } from "@angular/compiler";

@Component({
    selector: 'my-data-table',
    templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {

    @Input() dataModel: LazyDataModel<any>;
    @Input() ignoredFields: string[] = [];
    @Input() rows:number = 5;
    @Input() title: string = '';
    @Output() onItemSelect:EventEmitter<any> = new EventEmitter();

    private columnMetadatas: ColumnMetadata[] = [];
    private currentPage:number = 1;
    private currentColumnMetadata: ColumnMetadata;
    private dataList: any[] = [];
    private fields: string[] = [];
    private pages:number = 0;
    private firstLoad:boolean = true;

    ngOnInit(): void {
        this.calculateNumberOfPages();
        this.setCurrentDefaultColumnMetadata();
        this.loadFirstPage();
    }

    load(page: number): void {
        this.currentPage = page;
        this.dataModel.load(this.currentPage, this.rows, this.currentColumnMetadata.sortField, this.currentColumnMetadata.sortOrder)
            .subscribe(dataList => {
                this.dataList = dataList;
                if (this.firstLoad) {
                    this.firstLoad = false;
                    const sampleObject = dataList[0];
                    this.extractFieldsFromSampleObject(sampleObject);
                    this.createColumnMetadata();
                }
            });
    }

    selectItem(item) {
        this.onItemSelect.emit(item);
    }

    sortBy(columnMetadata: ColumnMetadata) {
        columnMetadata.sortOrder = this.invertSortOrder(columnMetadata);
        this.setCurrentColumnMetada(columnMetadata);
        this.currentColumnMetadata = columnMetadata;
        this.load(this.currentPage);

    }

    private calculateNumberOfPages(): void {
        this.pages = Math.ceil(this.dataModel.getRowCount() / this.rows);
    }

    private createTitleFromField(field) {
        let title = '';
        for (let letter of field) {
            this.isUpperCase(letter)
                ? title += ' ' + letter.toLowerCase()
                : title += letter;
        }
        return title.trim();
    }

    private createColumnMetadata() {
        this.columnMetadatas = this.fields
            .map(field => ({
                sortOrder: SortOrder.ASCEND,
                sortField: field,
                title: this.createTitleFromField(field)
            }));
    }
    
    private extractFieldsFromSampleObject(data: Object) {
        this.fields = Object.getOwnPropertyNames(data)
        .filter(field => !this.ignoredFields.includes(field));
    }

    private invertSortOrder(title: ColumnMetadata) {
        return title.sortOrder == SortOrder.ASCEND
            ? SortOrder.DESCEND
            : SortOrder.ASCEND;
    }
    
    private isUpperCase(letter: string) {
        return /[A-Z]/.test(letter);
    }

    private loadFirstPage() {
        this.load(1);
    }

    // ?
    private setCurrentColumnMetada(newTitle: ColumnMetadata) {
        this.columnMetadatas = this.columnMetadatas
            .map(title => 
                title.sortField == newTitle.sortField
                    ? newTitle
                    : title
            );
    }

    private setCurrentDefaultColumnMetadata(): void {
        this.currentColumnMetadata = {
            sortOrder: this.dataModel.getStartingSortOrder(),
            sortField: this.dataModel.getStartingSortField(),
            title: this.createTitleFromField(this.dataModel.getStartingSortField())
        }
    }
}

interface ColumnMetadata {
    sortOrder: SortOrder;
    sortField: string;
    title: string;
}

/*
var myString = "UmTesteQualquer";
var myRegexp = /([A-Z])+/g;
while ((match = myRegexp.exec(myString)) != null) {
 myString.replace(match[0], " " + match[0].toLowerCase()); 
}
*/