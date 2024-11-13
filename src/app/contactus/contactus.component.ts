import { Component, OnInit } from '@angular/core';
//declare var window : any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{

  //modal : any;

  ngOnInit(): void {
    //this.modal = new window.bootstrap.Modal(document.getElementById('myModal'));
    /*const modalElement = document.getElementById('myModal');
    if (modalElement) {
      this.modal = new (window as any).bootstrap.Modal(modalElement);
    } else {
      console.error('Modal element not found!');
    }*/
  }

  openModal(){
    //this.modal.show();
    /*if (this.modal) {
      this.modal.show();
    } else {
      console.error('Modal not initialized!');
    }*/
  }
}
