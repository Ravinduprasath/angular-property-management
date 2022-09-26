import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss']
})
export class ListPropertyComponent implements OnInit {

  propertyList : any;

  // Inject mat dialog
  // Inject api services (Connection with json server)
  constructor(private dialog : MatDialog,
              private api : ApiService,) { }

  openDialog(){
    this.dialog.open(DialogComponent, {
      maxWidth: '350px'
    }).afterClosed().subscribe(val => {
      if(val != 'error'){
        this.getPropertyList();
      }
    });
  }

  /// <Summery>
  /// Get list of proprty from database for dropDown
  /// <Summery>
  /// <return>
  /// Return list of courses
  /// </return>
  getPropertyList(){
    this.api.getAllProperty()
    .subscribe({
      next : (res) => {
        this.propertyList = res
        console.log(res)
      },
      error:() =>{

      }
    })
  }


  ngOnInit(): void {
    this.getPropertyList();
  }

}
