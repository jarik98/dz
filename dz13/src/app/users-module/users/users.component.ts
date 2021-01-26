import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;
  rowData: any;
  testUsers: any;
  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {
    // this.rowData = this.http.get('https://www.ag-grid.com/example-assets/small-row-data.json');
    this.dataService.getUsers().subscribe(
      res=>{
        this.rowData = res;
        this.testUsers = res;
        console.log(this.testUsers)
      }
    )
  }

  title = 'my-app';

  columnDefs = [
      { field: 'created_at', checkboxSelection: true,editable: true },
      { field: 'email' },
      { field: 'id'},
      { field: 'name',sort: 'asc'},
      { field: 'password'},
      { field: 'updated_at'}
  ];

//   columnDefs = [
//     { field: 'make', checkboxSelection: true,editable: true },
//     { field: 'model' },
//     { field: 'price'}
// ];

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
}
