import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  template: 
  `
  <ag-grid-angular
    class="ag-theme-quartz" style="height: 500px"
    [rowData]="rowData" [columnDefs]="colDefs"/>
  `
})

export class AppComponent {
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electiric: true },
    { make: "Ford", model: "F-Series", price: 33850, electiric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electiric: false },
  ];

  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electiric" },
  ]
}
