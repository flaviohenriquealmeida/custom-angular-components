import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { routes } from './app.rounting.module';
import { DataTableTestComponent } from './datatable-test/data-table-test-component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DataTableTestComponent
  ],
  imports: [
    BrowserModule, 
    SharedModule, 
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
