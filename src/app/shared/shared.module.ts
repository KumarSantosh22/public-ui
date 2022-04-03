import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';

import { GridComponent } from './grid/grid.component';
import { AuthenticateGuard } from './guards/authenticate.guard';
import { AuthorizeGuard } from './guards/authorize.guard';
import { ConfigService } from './config.service';
import { FormDirective } from './directives/form.directive';
import { TextDirective } from './directives/text.directive';
import { ClaimsDirective } from './directives/claims.directive';

@NgModule({
  declarations: [
    GridComponent,
    FormDirective,
    TextDirective,
    ClaimsDirective
  ],
  imports: [
    CommonModule,
    MenubarModule,
    SidebarModule,
  ],
  exports: [
    FormDirective,
    TextDirective,
    ClaimsDirective,
    GridComponent,
  ],
  providers: [
    ConfigService
  ]
})
export class SharedModule { }
