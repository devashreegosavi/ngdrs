import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { IdentificationMaster } from '../identificationmaster.model';
import { MatDialog } from '@angular/material/dialog';
import { DataGridDialogComponent } from '../data-grid-dialog/data-grid-dialog.component';
import { UserMaster } from '../usermaster.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  title = 'ngdrs';
  submitted = false;
  dispdata : any[] = [];
  selectedValue: string = '';
  selectedState : string = '';
  selectedDistrict : string = '';
  selectedtaluka : string = '';
  displaydata : IdentificationMaster[] | undefined;
  idproofs : IdentificationMaster[] | undefined;
  states : any[] = [];
  districts : any[] = [];
  talukas : any[] = [];

  form : FormGroup = new FormGroup({
    firstname: new FormControl(''),
    middlename: new FormControl(''),
    lastname: new FormControl(''),
    building: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl(''),
    state : new FormControl(''),
    district : new FormControl(''),
    taluka : new FormControl(''),
    email_id: new FormControl(''),
    mobile_no: new FormControl(''),
    id_type: new FormControl(''),
    pan_no: new FormControl(''),
  });

  constructor(private formbuilder : FormBuilder, private apiservice : ApiService, public dialog : MatDialog){

  }

  ngOnInit() : void{
    this.form = this.formbuilder.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(20), this.alphabeticValidator()]],
        middlename: ['', [Validators.required, Validators.minLength(20), this.alphabeticValidator()]],
        lastname: ['', [Validators.required, Validators.minLength(20), this.alphabeticValidator()]],
        building: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', Validators.required],
        state : ['', Validators.required],
        district : ['', Validators.required],
        taluka : ['', Validators.required],
        email_id: ['', Validators.required],
        mobile_no: ['', Validators.required],
        id_type: ['', Validators.required],
        pan_no: ['', Validators.required],
      }
    );

    this.apiservice.getidentificationdetails().subscribe(data =>{
      this.displaydata = data;
      //console.log(this.displaydata);
      this.idproofs = data;
      },error =>{
        console.log(error);
      }
    )

    this.apiservice.getallstatesdata().subscribe(data => {
      console.log(data);
      this.states = data;
    },error => {
        console.log(error);
    }
  )

    /*this.apiservice.getuserdatalist().subscribe(data => {
      console.log(data);
    },error => {
      console.log(error);
    }
  )*/
   
  }
  onSubmit(): void {
    this.submitted = true;
    console.log('Form Submitted!', this.form.value);
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  onSelectionChange(event: any) {
    this.selectedValue = event.target.value;
    //console.log('Selected Value:', this.selectedValue);
  }

  onStateChange(event : any){
    this.selectedState = event.target.value;
    //console.log('Selected State : ', this.selectedState);

    this.apiservice.getdistrictbystateid(this.selectedState).subscribe(data => {
      console.log(data);
      this.districts = data;
      this.talukas = [];
    },error => {
      console.log(error);
    })

  }

  onDistrictChange(event: any){
    this.selectedDistrict = event.target.value;

    this.apiservice.gettalukabydistrictid(this.selectedDistrict).subscribe(data => {
      console.log(data);
      this.talukas = data;
    })
  }

  alphabeticValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isValid = /^[a-zA-Z]*$/.test(control.value);
      return isValid ? null : { 'alphabetic': true };
    };
  }
  fetchUserCitizenData() : void{
    this.apiservice.getallusercitizendata().subscribe(userdata => {
      //console.log(userdata);
      this.dispdata = userdata;
      },error => {
        console.log(error)
      }
    )
  }

  openDialog() : void {
    this.apiservice.getallusercitizendata().subscribe(userdata => {
      //console.log(userdata);
      //this.dispdata = userdata;
      this.dialog.open(DataGridDialogComponent,{
        data : userdata,
      })
      },error => {
        console.log(error)
      }
    )
  }
}
