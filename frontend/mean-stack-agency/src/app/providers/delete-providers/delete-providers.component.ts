import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-providers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-providers.component.html',
  styleUrl: './delete-providers.component.css',
})
export class DeleteProvidersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
