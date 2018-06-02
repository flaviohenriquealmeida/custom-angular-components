import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ColumnHeader } from "./column-header";
import { SortOrder } from "../model/datamodel";

const NO_FILTER = '';

@Component({
    selector: 'my-columnHeader',
    templateUrl: './column-header.component.html'
})
export class ColumnHeaderComponent implements OnInit {

    @Input() field: string;
    @Output() onSelect = new EventEmitter<ColumnHeader>();
    @Output() onFilterInput = new EventEmitter<ColumnHeader>();
    columnHeader: ColumnHeader;

    @ViewChild('inputElement') inputElement: ElementRef<HTMLInputElement>;

    ngOnInit(): void {
        this.createColumnHeaderFromField();
    }

    select() {
        this.columnHeader.sortOrder = this.getInvertedSortOrder();
        this.onSelect.emit(this.columnHeader);
    }

    input(filter) {
        this.columnHeader.filterField = this.columnHeader.sortField;
        this.columnHeader.filterValue = filter;
        this.onFilterInput.emit(this.columnHeader);
    }

    resetField() {
        this.inputElement.nativeElement.value = '';
    }

    private createColumnHeaderFromField() {
        const filter = new Map();
        filter.set(this.field, NO_FILTER);
        this.columnHeader = {
            sortOrder: SortOrder.ASCEND,
            sortField: this.field,
            title: this.createTitleFromField(this.field),
            filterField: '', 
            filterValue: ''
        };
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

    private getInvertedSortOrder() {
        return this.columnHeader.sortOrder == SortOrder.ASCEND
            ? SortOrder.DESCEND
            : SortOrder.ASCEND;
    }

    private isUpperCase(letter: string) {
        return /[A-Z]/.test(letter);
    }
}
