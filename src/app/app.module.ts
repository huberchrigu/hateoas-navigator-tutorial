import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  CollectionResolverService,
  HalNavigatorModule,
  ResourceDescriptorResolverService,
  ResourceObjectResolverService,
  RouteParams
} from 'hateoas-navigator';
import {
  DocumentComponentsModule,
  ResourceFormComponent,
  ResourceItemComponent,
  ResourceListComponent
} from 'document-components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
    RouterModule.forRoot([
      {
        path: ':' + RouteParams.RESOURCE_PARAM + '/new',
        component: ResourceFormComponent,
        resolve: {
          resourceDescriptor: ResourceDescriptorResolverService
        }
      },
      {
        path: `:${RouteParams.RESOURCE_PARAM}/:${RouteParams.ID_PARAM}`,
        component: ResourceItemComponent,
        resolve: {
          resourceObject: ResourceObjectResolverService
        }
      },
      {
        path: `:${RouteParams.RESOURCE_PARAM}/:${RouteParams.ID_PARAM}/edit`,
        component: ResourceFormComponent,
        resolve: {
          resourceObject: ResourceObjectResolverService
        }
      },
      {
        path: ':' + RouteParams.RESOURCE_PARAM,
        component: ResourceListComponent,
        resolve: {
          collectionAdapter: CollectionResolverService
        }
      }
    ]) // copied from GenericRoutes.get()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
