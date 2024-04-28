import { Component, OnInit } from '@angular/core';
import { FormControl,FormControlName,FormGroup, Validators } from '@angular/forms';
import { invalidEmailDomainValidator } from './emailValidators';

const invalidEmailDomain = invalidEmailDomainValidator(["gmail","yahoo","test"])

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  contactFormGroup = new FormGroup({
    nameControl : new FormControl("",Validators.required),
    emailControl : new FormControl("",[Validators.required,Validators.email,invalidEmailDomain]),
    messageControl : new FormControl("",[ Validators.required,Validators.minLength(10)])
  })
 
  ngOnInit(): void {
    
  }

  getBasicRequiredFieldValidations(controlName:string){
    return this.contactFormGroup.get(controlName)?.hasError('required') && (this.contactFormGroup.get(controlName)?.touched || this.contactFormGroup.get(controlName)?.dirty)
  }

  submit(event:any){
    console.log(this.contactFormGroup.value);
    console.log(this.contactFormGroup.valid);
  }
  
}
