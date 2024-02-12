import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  lastname: any;
  firstname: any;
  component() {}

  ngOnInit(): void {}

  handleSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
    console.log(contactForm.value.message);
  }
}
