import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormAuditComponent} from './components/group-audit/form-audit/form-audit.component';
import {FormSettingsComponent} from './components/group-settings/form-settings/form-settings.component';

const routes: Routes = [
  {path: 'settings', component: FormSettingsComponent},
  {path: 'audit', component: FormAuditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
