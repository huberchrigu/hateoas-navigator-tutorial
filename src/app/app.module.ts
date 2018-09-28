import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HalNavigatorModule} from 'hateoas-navigator';
import {DocumentComponentsModule, GenericRoutes} from 'document-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HalNavigatorModule.forRoot(undefined),
    DocumentComponentsModule,
    RouterModule.forRoot(GenericRoutes.get())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
