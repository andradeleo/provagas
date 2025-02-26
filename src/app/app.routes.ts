import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: () => import("./features/dashboard/dashboard.component").then(module => module.DashboardComponent)
  },
  {
    path: "professional-infos",
    loadComponent: () => import("./features/professional-infos/professional-infos.component").then(module => module.ProfessionalInfosComponent)
  }
];
