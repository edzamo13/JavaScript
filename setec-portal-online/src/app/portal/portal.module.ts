import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalContainerComponent } from './portal-container/portal-container.component';
import { SharedModule } from '../shared/shared.module';
import {
  MatCardModule, MatGridListModule,
} from '@angular/material';
import { PortalMainComponent } from './portal-main/portal-main.component';
import { PortalRoutingModule } from './portal-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'angular2-useful-swiper';

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
    MatCardModule,MatGridListModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    CarouselModule,
    SwiperModule


  ],
  exports: [PortalMainComponent,
    PortalContainerComponent,

  ],


})
export class PortalModule { }
