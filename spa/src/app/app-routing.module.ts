import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainModule} from "./main/main.module";

const routes: Routes = [


    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },

    {
        path: 'main',
        loadChildren: () => import('./main/main.module').then(module => module.MainModule)

    }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
