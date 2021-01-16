import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './core/components/demo/demo.component';
import { DemoResolver } from './core/components/demo/demo.resolver';
const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
    resolve: {
      users: DemoResolver,
    },
  },
  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DemoResolver],
})
export class AppRoutingModule {}
