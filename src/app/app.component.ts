import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ApiService } from './api.service';
import { IdentificationMaster } from './identificationmaster.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngdrs';
  submitted = false;
  idproofs = [
    { value: '1', label: 'Driving License' },
    { value: '2', label: 'PAN' },
    { value: '3', label: 'Passport' },
    { value: '4', label: 'Voter Card' }
  ];

  selectedValue: string = '';
  displaydata : IdentificationMaster[] | undefined;

  form : FormGroup = new FormGroup({
    firstname: new FormControl(''),
    middlename: new FormControl(''),
    lastname: new FormControl(''),
    building: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl(''),
    email_id: new FormControl(''),
    mobile_no: new FormControl(''),
    id_type: new FormControl(''),
    pan_no: new FormControl(''),
  });

  constructor(private formbuilder : FormBuilder, private apiservice : ApiService){

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
          email_id: ['', Validators.required],
          mobile_no: ['', Validators.required],
          id_type: ['', Validators.required],
          pan_no: ['', Validators.required],
        }
      );

      this.apiservice.getidentificationdetails().subscribe(data =>{
        this.displaydata = data;
        console.log(this.displaydata);
        },error =>{
          console.log(error);
        }
      )
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
    console.log('Selected Value:', this.selectedValue);
  }

  alphabeticValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isValid = /^[a-zA-Z]*$/.test(control.value);
      return isValid ? null : { 'alphabetic': true };
    };
  }
}
