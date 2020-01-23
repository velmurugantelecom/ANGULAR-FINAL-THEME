import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AioTableComponent } from './aio-table.component';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
{
 path:'',
 component:AioTableComponent,
 data: {
  toolbarShadowEnabled: true
}
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AioTableRoutingModule { }
