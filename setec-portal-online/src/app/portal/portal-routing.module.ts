import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalContainerComponent } from './portal-container/portal-container.component';
import { PortalMainComponent } from './portal-main/portal-main.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

const portalRoutes: Routes = [
    {
        path: 'portal',
        component: MainLayoutComponent,
        children: [
           // { path: '', component: PortalContainerComponent, pathMatch: 'full' },
            { path: 'online', component: PortalMainComponent }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(portalRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PortalRoutingModule {

}
