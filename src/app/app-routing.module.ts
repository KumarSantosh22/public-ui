import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './@core/dummy/dummy.component';
import { ErrorComponent } from './@core/error/error.component';
import { AppComponent } from './app.component';
import { AuthenticateGuard } from './shared/guards/authenticate.guard';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), outlet: 'auth'
    // canActivate:[AuthenticateGuard],
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    // canActivate:[AuthenticateGuard]
  },
  {
    path: '', component: DummyComponent, data: { title: 'Dummy Content' }
  },
  { path: '**', pathMatch: 'full', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
