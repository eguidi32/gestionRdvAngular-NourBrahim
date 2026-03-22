import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PatientRequest } from '@core/models/patient.model';
import { PatientService } from '@core/services/patient.service';

@Component({
  selector: 'app-patient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patientForm : FormGroup;
  messageSuccess: string ='';
  constructor(private fb: FormBuilder, private patientService: PatientService){
    this.patientForm = this.fb.group({
      numero: new FormControl('', [Validators.required, Validators.minLength(5)]),
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      antecedents: [''],
    });
  }

  get f()
  {
    return this.patientForm.controls;
  }

  onSubmit():void{
    if(this.patientForm.valid)
    {
      const patientData: PatientRequest = this.patientForm.value;
      this.patientService.createPatient(patientData);
      this.messageSuccess = 'Patient créer avec succès'
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldCtrl = this.f[fieldName];
    return !!(fieldCtrl && fieldCtrl.invalid && (fieldCtrl.dirty || fieldCtrl.touched));
  }

  onReset():void{
    this.patientForm.reset();
    this.messageSuccess = ''
  }

}
