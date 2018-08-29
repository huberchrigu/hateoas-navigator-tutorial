import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HalNavigatorModule} from 'hateoas-navigator';
import {DocumentComponentsModule} from 'document-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HalNavigatorModule.forRoot(undefined),
    DocumentComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
