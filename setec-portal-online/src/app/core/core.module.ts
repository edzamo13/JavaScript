import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatListModule, MatDividerModule } from '@angular/material';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopMenuComponent, LeftMenuComponent],
  exports: [TopMenuComponent, LeftMenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    SharedModule,
    RouterModule.forChild([])

  ]
})
export class CoreModule { }
