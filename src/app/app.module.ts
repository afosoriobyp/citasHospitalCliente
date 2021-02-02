import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AngularMaterialModule } from './angular-material.module';
import { AgmCoreModule } from '@agm/core';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TableListComponent } from './pages/table-list/table-list.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    ChartsModule,
    AppRoutingModule,
    AngularMaterialModule,
    AuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    NopagefoundComponent,
    ProgressComponent,
    Grafica1Component,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
