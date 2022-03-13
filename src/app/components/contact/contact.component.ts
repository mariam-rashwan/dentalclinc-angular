import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,private _httpClient:HttpClient ) { }
  contactForm=new FormGroup({});
  name:string = '';
  email:string = '';
  message:string = '';
  ngOnInit(): void {
    this.contactForm=this._formBuilder.group({
      message:['' , [Validators.required],],
      name:['' , [Validators.required],],
      email:['' , [Validators.required ,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],],

    });
  }

  isValidControl(name:string):boolean
  {
    return this.contactForm.controls[name].valid;
  }

  isInValidAndTouched(name:string):boolean
  {
    return  this.contactForm.controls[name].invalid && (this.contactForm.controls[name].dirty || this.contactForm.controls[name].touched);
  }

  isControlHasError(name:string,error:string):boolean
  {
    return  this.contactForm.controls[name].invalid && this.contactForm.controls[name].errors?.[error];
  }

}
