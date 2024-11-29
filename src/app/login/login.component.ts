import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EncDecService } from '../enc-dec.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm : FormGroup = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('') 
  });

  encryptedstr : string = '';
  plainpwd : string = '';
  usernm : string = '';
  errorMessage : string = '';

  constructor(private fb : FormBuilder, private encdec : EncDecService, private apiservice : ApiService, private router : Router, private route : ActivatedRoute, private auth : AuthService){
    this.loginForm = this.fb.group({
        username : ['',[Validators.required]],
        password : ['',[Validators.required]]
    });
  }

  ngOnInit() : void{
    //this.encryptedstr = this.encdec.hashPassword('Com*mon#86');
    //console.log(this.encryptedstr);

    this.route.queryParams.subscribe(params => {
      if(params['error']){
        this.errorMessage = params['error'];
      }
    })
  }

  onSubmit(){
    console.log('Form Submitted!', this.loginForm.value);
    this.usernm = this.loginForm.get('username')?.value;
    this.plainpwd = this.loginForm.get('password')?.value;
    this.encryptedstr = this.encdec.hashPassword(this.plainpwd);
    //console.log(this.encryptedstr);

    this.apiservice.getdbpwd(this.usernm).subscribe(data => {
      //console.log(data);
      //console.log(JSON.stringify(data));
      //const jsonObject = JSON.parse(JSON.stringify(data));
      //const jsonObject = JSON.stringify(data);
      //console.log(jsonObject);
      if (data == null || data.length === 0) {
        console.log("Username not found.");
      }else{
        const pwdfromdb = data[0].password;
        //console.log(pwdfromdb);
        // here checking database pwd with entered pwd
        if(this.encryptedstr===pwdfromdb){
          // redirect to welcome page
          this.router.navigate(['/welcomepage']);
          this.auth.login();
        }
        else{
          //redirect to login page with invalid password message
          //console.log('Invalid password');
          this.router.navigate(['/login'], {
            queryParams: { error: 'Invalid username or password' }
          });
        }
      }
    },error => {
      console.log(error);
    })

  }
}
