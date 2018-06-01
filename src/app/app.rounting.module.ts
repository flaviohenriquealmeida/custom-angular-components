import { Routes } from '@angular/router';
import { DataTableTestComponent } from './datatable-test/data-table-test-component';

export const routes: Routes = [
    { path: 'data-table', component: DataTableTestComponent},
    { path: '**', component: DataTableTestComponent}
];

