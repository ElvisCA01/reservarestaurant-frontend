import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger} from '@angular/animations';
import {Title} from "@angular/platform-browser";

interface Country {
  name: string;
  area: string;
  evento: string;
}

@Component({
  selector: 'app-search-booking',
  templateUrl: './search-booking.component.html',
  styleUrls: ['./search-booking.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SearchBookingComponent implements OnInit, AfterViewInit{
  searchTerm = '';

  displayedColumns: string[] = ['Name', 'Area', 'Population'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<Country>()
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  filterCountries(searchTerm: string) {
    this.dataSource.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private http: HttpClient, private titulo:Title) {
    titulo.setTitle('Busca tu reserva!')
  }

  ngOnInit(): void {
    this.http.get<Country[]>('./assets/data/tables.json')
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource<Country>(data)
      });
  }
  onMatSortChange() {
    this.dataSource.sort = this.sort;
  }

}
