import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons/icons.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [IconsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }
