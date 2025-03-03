import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: () => import("./features/dashboard/dashboard.component").then(module => module.DashboardComponent)
  },
  {
    path: "profiles",
    loadComponent: () => import("./features/profiles/profiles.component").then(module => module.ProfilesComponent)
  }
];
