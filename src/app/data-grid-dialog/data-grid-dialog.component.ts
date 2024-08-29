import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-data-grid-dialog',
  templateUrl: './data-grid-dialog.component.html',
  styleUrls: ['./data-grid-dialog.component.css']
})
export class DataGridDialogComponent {
   displayedColumns: string[] = ['user_id', 'username', 'office_id','role_id','full_name','mobile_no','email_id']; // Modify columns as needed
   dataSource : any[]  = [];

    constructor(@Inject(MAT_DIALOG_DATA) public data : any[]){
        this.dataSource = data;
    }
}
