import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ApiService } from './api.service';
import { IdentificationMaster } from './identificationmaster.model';
import { MatDialog } from '@angular/material/dialog';
import { DataGridDialogComponent } from './data-grid-dialog/data-grid-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formbuilder : FormBuilder, private apiservice : ApiService, public dialog : MatDialog){

  }
  
  ngOnInit() : void{
      
  }

}
