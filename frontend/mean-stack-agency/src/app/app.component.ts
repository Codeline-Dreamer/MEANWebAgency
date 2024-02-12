import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProvidersComponent } from './providers/providers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, ProvidersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mean-stack-agency';
}
