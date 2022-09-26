import { Component, OnInit } from '@angular/core';

// For angular form
// FormGroup - Control our all form (Handle form input)
// FormControl - What inside form controller (input fields etc)
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  // Form declare
  propertyForm !: FormGroup;

  // Property type array list
  propertyTypeList : any;
  
  // Inject formgroup using constructor
  // Inject api services (Connection with json server)
  // Inject MatDialogRef <The model that data comming from> (To close form on success)
  constructor(private formBuilder : FormBuilder,
              private api : ApiService,
              private dialogRef : MatDialogRef<DialogComponent>) { }

  /// <Summery>
  /// Get list of course from database for dropDown
  /// <Summery>
  /// <return>
  /// Return list of courses
  /// </return>
  getPropertyTypeList(){
    this.api.getAllPropertyTypes()
    .subscribe({
      next : (res) => {
        this.propertyTypeList = res
      },
      error:() =>{
        
      }
    })
  }

  /// <Summery>
  /// Add a property to database (Id auto increment)
  /// <Summery>
  /// <return></return>
  addProperty(){
    if(this.propertyForm.valid){
      this.api.addProperty(this.propertyForm.value)
      .subscribe({
        next : (res) => {
          this.propertyForm.reset();
          this.dialogRef.close();
        },
        error:() =>{
          this.dialogRef.close('error');
        }
      })
    }
  }

  ngOnInit(): void {

    this.getPropertyTypeList();
    
    this.propertyForm = this.formBuilder.group({
        ownerName       : ['', Validators.required],
        propertyAddress : ['', Validators.required],
        propertyType    : ['', Validators.required],
        bedroomCount    : ['', [Validators.required, Validators.min(0)]],
        phoneNumber     : ['', Validators.required],

        latitude        : ['', Validators.required],
        longitude       : ['', Validators.required],
    });

  }

}
