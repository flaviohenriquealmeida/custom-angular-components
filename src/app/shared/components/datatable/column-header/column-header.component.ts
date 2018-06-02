import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { ColumnHeader } from "./column-header";
import { SortOrder } from "../model/datamodel";

@Component({
    selector: 'my-columnHeader',
    templateUrl: './column-header.component.html'
})
export class ColumnHeaderComponent implements OnInit {

    @Input() field: string;
    @Output() onSelect = new EventEmitter<ColumnHeader>();
    columnHeader: ColumnHeader;

    ngOnInit(): void {
        this.createColumnHeaderFromField();
    }

    select() {
        this.columnHeader.sortOrder = this.getInvertedSortOrder();
        this.onSelect.emit(this.columnHeader);
    }

    private createColumnHeaderFromField() {
        this.columnHeader = {
            sortOrder: SortOrder.ASCEND,
            sortField: this.field,
            title: this.createTitleFromField(this.field)
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
