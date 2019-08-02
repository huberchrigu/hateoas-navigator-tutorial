import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollectionResolverService, ResourceDescriptorResolverService, ResourceObjectResolverService, RouteParams} from 'hateoas-navigator';
import {ResourceFormComponent, ResourceItemComponent, ResourceListComponent} from 'resource-components';

const routes: Routes = [{
  path: ':' + RouteParams.RESOURCE_PARAM + '/new',
  component: ResourceFormComponent,
  resolve: { resourceDescriptor: ResourceDescriptorResolverService }
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
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
