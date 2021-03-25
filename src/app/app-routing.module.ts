import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHandworkerComponent } from './add-handworker/add-handworker.component';
import { AddToolboxComponent } from './add-toolbox/add-toolbox.component';
import { AddToolComponent } from './add-tool/add-tool.component';
import { FullviewComponent } from './fullview/fullview.component';

const routes: Routes = [
  {path: 'addTool', component: AddToolComponent},
  {path: 'addToolbox', component: AddToolboxComponent},
  {path: 'addHandworker', component: AddHandworkerComponent},
  {path: '**', component: FullviewComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
