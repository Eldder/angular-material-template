import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';


import { GridComponent } from './grid/grid.component'
import { FormsComponent } from './forms/forms.component'
import { EmptyComponent } from './empty/empty.component'


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: EmptyComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'empty', component: EmptyComponent },
      { path: 'grid', component: GridComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedRoutingModule { }
