import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (h) => h.HomePageComponent
      ),
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./pages/container-page/container-page.component').then(
        (c) => c.ContainerPageComponent
      ),
    children: [
      {
        path: 'button',
        loadComponent: () =>
          import('./pages/button-page/button-page.component').then(
            (b) => b.ButtonPageComponent
          ),
      },
    ],
  },
  {
    path: 'test',
    loadComponent: () =>
      import('./pages/test-page/test-page.component').then(
        (t) => t.TestPageComponent
      ),
  },
];
