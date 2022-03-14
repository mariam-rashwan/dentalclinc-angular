import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  appointForm= new FormGroup({});


  selectedType = 'opentype';

  constructor(private _formBuilder:FormBuilder,private _httpClient:HttpClient ) { }

  ngOnInit(): void {
    this.appointForm=this._formBuilder.group({
      gender:["",[Validators.required]],
      visit:["",[Validators.required]],
      reason:['' , [Validators.required],],
      name:['' , [Validators.required],],
      email:['' , [Validators.required ,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],],
      phone:["",[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.maxLength(15),Validators.minLength(11)]],
      date:['' , [Validators.required],],
      time:['' , [Validators.required],],
      department:['' , [Validators.required],],
      doctor:['' , [Validators.required],],



    });
  }

  

  onChange(event:any) {
    this.selectedType = event.target.value;
  }

  isValidControl(name:string):boolean
  {
    return this. appointForm.controls[name].valid;
  }

  isInValidAndTouched(name:string):boolean
  {
    return  this. appointForm.controls[name].invalid && (this. appointForm.controls[name].dirty || this. appointForm.controls[name].touched);
  }

  isControlHasError(name:string,error:string):boolean
  {
    return  this. appointForm.controls[name].invalid && this. appointForm.controls[name].errors?.[error];
  }
}