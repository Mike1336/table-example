import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { IPeriodicElement } from '../../interfaces/periodic-element';
import { DataService } from '../../services/data.service';


@Component({
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource: MatTableDataSource<IPeriodicElement>;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  constructor(private _data: DataService) {
  }

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IPeriodicElement>(this._data.content)
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
