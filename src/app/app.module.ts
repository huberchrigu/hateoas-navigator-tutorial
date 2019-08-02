import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HalNavigatorModule } from 'hateoas-navigator';
import { ResourceComponentsModule } from 'resource-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HalNavigatorModule.forRoot(undefined),
    ResourceComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
