import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProvidersComponent } from './providers/providers.component';
import { AddProvidersComponent } from './providers/add-providers/add-providers.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'providers',
    component: ProvidersComponent,
    title: 'Providers',
  },
  {
    path: 'providers/add-provider-form',
    component: AddProvidersComponent,
    title: 'Add New Provider',
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Not Found',
  },
];
