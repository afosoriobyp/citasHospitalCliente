import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TableListComponent } from '../../pages/table-list/table-list.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ProgressComponent } from 'app/pages/progress/progress.component';
import { Grafica1Component } from 'app/pages/grafica1/grafica1.component';
import { PromesasComponent } from 'app/pages/promesas/promesas.component';
import { RegisterComponent } from 'app/auth/register/register.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { NopagefoundComponent } from 'app/nopagefound/nopagefound.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    // { path: '', component: AdminLayoutComponent,
    //     children:[
    //         { path: 'dashboard',      component: DashboardComponent },
    //         { path: 'progress',       component: ProgressComponent },
    //         { path: 'grafica1',       component: Grafica1Component },
    //         { path: 'user-profile',   component: UserProfileComponent },
    //         { path: 'table-list',     component: TableListComponent },
    //         { path: 'typography',     component: TypographyComponent },
    //         { path: 'icons',          component: IconsComponent },
    //         { path: 'maps',           component: MapsComponent },
    //         { path: 'notifications',  component: NotificationsComponent },
    //         { path: 'upgrade',        component: UpgradeComponent },
    //         { path: '', redirectTo:'/dashboard', pathMatch: 'full' },
    //     ]
    // },

    // { path: 'register', component: RegisterComponent },
    // { path: 'login', component: LoginComponent },
    // { path: '**', component: NopagefoundComponent },

    
        
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'progress',       component: ProgressComponent },
    { path: 'grafica1',       component: Grafica1Component },
    { path: 'promesas',       component: PromesasComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
       
];
