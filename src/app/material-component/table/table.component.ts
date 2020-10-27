import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  id: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, id: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, id: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, id: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, id: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, id: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, id: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, id: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, id: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, id: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, id: 'Neon', weight: 20.1797, symbol: 'Ne'},
];






@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

ngOnInit(): void {
}

}


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


