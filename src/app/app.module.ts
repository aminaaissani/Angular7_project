import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes,RouterModule } from '@angular/router';

const appRoutes: Routes=[
  {path: 'appareils', component: AppareilViewComponent},
  {path: 'auth', component:AuthComponent},
  {path:'',component:AppareilViewComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
