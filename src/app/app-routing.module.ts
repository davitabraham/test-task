import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {ChosenProductComponent} from './chosen-product/chosen-product.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'personal', component: PersonalDetailsComponent},
  {path: 'shopping-cart', component: ChosenProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
