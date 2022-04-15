import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { finalize } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: ReadAllComponent
  },
  {
    path: 'FinalizadosComponent',
    component: FinalizadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
