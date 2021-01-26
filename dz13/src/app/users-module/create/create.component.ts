import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  createUser(data1,data2,data3){
    console.log(data1,data2,data3)
    this.dataService.newUser(data1,data2,data3).subscribe(
      res=>{
        console.log(res);
      }
    );
  }
}
