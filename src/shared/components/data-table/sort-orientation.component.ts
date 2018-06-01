import { Component, Input } from "@angular/core";
import { SortOrder } from "./lazy-data-model";

@Component({
    selector: 'my-sortOrientation',
    templateUrl: './sort-orientation.component.html'
})
export class SortOrientationComponent {

    @Input() sortOrder: SortOrder;
}