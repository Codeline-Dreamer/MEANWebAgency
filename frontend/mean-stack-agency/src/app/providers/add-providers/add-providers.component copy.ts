import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProvidersComponent } from '../providers.component';

import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProviderClass } from '../../models/providers.class';
import { providers } from '../../models/providers.data';

@Component({
  selector: 'app-add-providers',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-providers.component.html',
  styleUrl: './add-providers.component.css',
})
export class AddProvidersComponent {
  submitted = false;
  provider = new ProviderClass();
  providersForm: FormGroup;
  constructor() {
    this.providersForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50), // Assuming a reasonable max length for names
        Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/), // Allows alphabetic characters and spaces between words
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/), // Allows alphabetic characters and spaces between words
      ]),
      position: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
        Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/), // Allows alphabetic characters and spaces between words
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(100), // Email addresses can be quite long, but it's good to have some limit
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\+?2?\d{12}$/), // Basic international phone format, adjust regex as needed
      ]),
      // Nest the company-related controls within a FormGroup
      company: new FormGroup({
        company_name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ]),
        address: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ]),
        address2: new FormControl('', [
          Validators.maxLength(100), // Optional field, but still good to limit length
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ]),
        state: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ]),
        postal_code: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ]),
        description: new FormControl('', [
          Validators.maxLength(500), // Assuming a max length for a description
        ]),
        tagline: new FormControl('', [Validators.maxLength(100)]),
      }),
    });
  }

  handleSubmit() {
    {
      let newId: number;
      while (true) {
        newId = Math.floor(Math.random() * 10000 + 99999);
        if (providers.findIndex((el) => el.id == newId) == -1) {
          break;
        }
      }
      const p = this.providersForm.value; // Grab the form values
      this.provider.id = newId;
      this.provider.firstname = p.firstname;
      this.provider.lastname = p.lastname;
      this.provider.position = p.position;
      this.provider.company = {
        // Correctly access and assign to the provider's company property
        company_name: p.company.company_name,
        address: p.company.address,
        address2: p.company.address2,
        city: p.company.city,
        state: p.company.state,
        postal_code: p.company.postal_code,
        phone: p.phone, // Ensure this and email are correctly placed
        email: p.email,
        description: p.company.description,
        tagline: p.company.tagline,
      };
      providers.push(this.provider); // Assuming providers is an array accessible in this scope
      this.submitted = true;
      // Print the newly added provider to the console
      console.log('New provider added:', this.provider);
    }
  }
}
