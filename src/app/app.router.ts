import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';


const appRoutes: Routes = [
    { path: '', 
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainComponent
       },
       {
          path: 'main',
          component: MainComponent
        }
      ]
    },
    {
      path: '**',
      redirectTo: ''
    }
  ];

  export const routing = RouterModule.forRoot(appRoutes);