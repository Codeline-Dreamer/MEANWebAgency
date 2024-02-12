import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { providers } from '../models/providers.data';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProviderService } from '../services/provider.service';
import { ProviderClass } from '../models/providers.class';
declare var $: any;
@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css',
})
export class ProvidersComponent implements OnInit {
  @ViewChild('deleteConfirmationModal') deleteConfirmationModal!: ElementRef;

  providers: ProviderClass[] = [];

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.providerService.getProviders().subscribe({
      next: (data) => {
        this.providers = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
