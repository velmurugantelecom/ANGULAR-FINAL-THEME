import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';  

const childrenRoutes: VexRoutes = [
  {
    path: '',
    redirectTo: 'dashboards/analytics', 
    pathMatch: 'full',
  },
  {
    path: 'pages',
    children: [
      {
        path: 'aio-table',
        loadChildren: () => import('./pages/aio-table/aio-table.module').then(m => m.AioTableModule ),
      },
    ]
  },
];

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: childrenRoutes
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
