import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './@core/header/header.component';
import { NavbarComponent } from './@core/navbar/navbar.component';
import { SidebarComponent } from './@core/sidebar/sidebar.component';
import { HeaderEcomComponent } from './@core/header-ecom/header-ecom.component';
import { HeaderEcomTwoComponent } from './@core/header-ecom-two/header-ecom-two.component';
import { DummyComponent } from './@core/dummy/dummy.component';
import { NotFoundComponent } from './@core/not-found/not-found.component';
import { ErrorComponent } from './@core/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderEcomComponent,
    HeaderEcomTwoComponent,
    DummyComponent,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
