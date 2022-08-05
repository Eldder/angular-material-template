import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid/grid.component';
import { FormsComponent } from './forms/forms.component';

import { FixedRoutingModule } from './fixed-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    GridComponent,
    FormsComponent,
    EmptyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    
    FixedRoutingModule
  ],
  exports: []
})
export class FixedModule { }
