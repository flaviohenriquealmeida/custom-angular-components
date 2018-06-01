import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'my-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

    @Input() pages: number;
    @Output() onPageSelect = new EventEmitter<number>();

    private currentPage: number = 1;

    isActive(page: number) {
        return page === this.currentPage;
    }

    setCurrentPage(page) {
        this.currentPage = page;
        this.onPageSelect.emit(this.currentPage);
    }
}