import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FileDetailComponent } from './components/fileDetail/fileDetail.component';
const routes: Routes = [
	{
		path: '', children: [
			{ path: 'dashboard', component: DashboardComponent },
			{ path: ':id', component: FileDetailComponent }
		]
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	declarations: [],
	providers: [],
})
export class HomeRoutingModule { }
