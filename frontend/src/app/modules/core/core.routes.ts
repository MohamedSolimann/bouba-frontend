import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { CoreComponent } from "./core.component";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
  { path: "", component: CoreComponent },
  { path: "homepage", component: HomepageComponent },
  { path: "admin", component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRouting {}
