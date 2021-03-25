import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToolComponent } from './add-tool/add-tool.component';
import { AddHandworkerComponent } from './add-handworker/add-handworker.component';
import { FormsModule } from '@angular/forms';
import { handworkerService } from './services/handworkerService';
import { HttpClientModule } from '@angular/common/http';
import { AddToolboxComponent } from './add-toolbox/add-toolbox.component';
import { toolService } from './services/toolService';
import { toolboxService } from './services/toolboxService';
import { FullviewComponent } from './fullview/fullview.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToolComponent,
    AddHandworkerComponent,
    AddToolboxComponent,
    FullviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [handworkerService, toolService, toolboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
