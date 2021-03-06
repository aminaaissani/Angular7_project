import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from "./services/auth-guard.service";

const appRoutes: Routes=[
  {path: 'appareils', canActivate: [AuthGuard],component: AppareilViewComponent},
  {path: 'auth', canActivate: [AuthGuard], component:AuthComponent},
  {path:'',component:AppareilViewComponent},
  {path:'appareils/:id', component:SingleAppareilComponent},
  {path:'not-found', component:FourOhFourComponent},
  {path:'**',redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
