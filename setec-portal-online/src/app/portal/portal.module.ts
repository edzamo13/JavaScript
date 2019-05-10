import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalContainerComponent } from './portal-container/portal-container.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatSidenavModule,
  MatGridListModule,
  MatCardModule,
} from '@angular/material';
import { PortalMainComponent } from './portal-main/portal-main.component';
import { PortalRoutingModule } from './portal-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { TopMenuComponent } from '../core/top-menu/top-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PortalContainerComponent,
    PortalMainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PortalRoutingModule,
    LayoutModule,
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule, NgbModule

  ],
  exports: [PortalMainComponent,
    PortalContainerComponent,

  ],


})
export class PortalModule { }
