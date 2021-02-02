import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { AngularMaterialModule } from 'app/angular-material.module';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChartsModule,
    AngularMaterialModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    IncrementadorComponent,
    DonaComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    IncrementadorComponent,
    DonaComponent,

  ]
})
export class ComponentsModule { }
