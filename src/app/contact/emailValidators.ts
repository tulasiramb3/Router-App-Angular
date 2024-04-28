import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function invalidEmailDomainValidator(hosts : string[]) : ValidatorFn { 
    return (control: AbstractControl) : ValidationErrors | null => {

    var value = control.value;

    if(!value){
        return null;
    }
    var matches = hosts.some(m=> value.indexOf(m)>-1)

    return matches ? {'emailDomainValidator' : true}  : null;
    }
}



export function emailDomainValidator(control : AbstractControl) : ValidationErrors | null{
    
    var value = control.value;

    if(!value){
        return null;
    }

    var hosts =['yahoo.com','gmail.com']

    var matches = hosts.some(m=> value.indexOf(m)>-1)

    return matches ? {'emailDomainValidator' : true}  : null;
}