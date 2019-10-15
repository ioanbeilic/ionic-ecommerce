import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: "list",
    loadChildren: () =>
      import("./list/list.module").then(m => m.ListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: "landing",
    loadChildren: "./pages/landing/landing.module#LandingPageModule"
  },
  {
    path: "login",
    loadChildren: "./pages/auth/login/login.module#LoginPageModule"
  },
  {
    path: "register",
    loadChildren: "./pages/auth/register/register.module#RegisterPageModule"
  },
  {
    path: "dashboard",
    loadChildren: "./pages/dashboard/dashboard.module#DashboardPageModule",
    canActivate: [AuthGuard]
  },
  { path: 'category', loadChildren: './pages/category/category.module#CategoryPageModule' },
  { path: 'products', loadChildren: './pages/products/products.module#ProductsPageModule' },
  { path: 'categories', loadChildren: './pages/shop/categories/categories.module#CategoriesPageModule' },
  { path: 'category', loadChildren: './pages/shop/categories/category/category.module#CategoryPageModule' },
  { path: 'products', loadChildren: './pages/shop/products/products.module#ProductsPageModule' },
  { path: 'product', loadChildren: './pages/shop/products/product/product.module#ProductPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'chart', loadChildren: './pages/shop/chart/chart.module#ChartPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
