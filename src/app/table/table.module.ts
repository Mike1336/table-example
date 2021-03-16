import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './components/table/table.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    // Angular Material
    MatTableModule,
    MatPaginatorModule,
    // Own
    TableRoutingModule,
  ],
  providers: [
    DataService,
  ],
})
export class TableModule { }
