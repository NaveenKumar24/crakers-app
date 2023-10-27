import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { SafetyTipsComponent } from './safety-tips/safety-tips.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path : '', component: IndexComponent},
  { path : 'about-us', component: AboutUsComponent},
  { path : 'order-now', component: OrderNowComponent},
  { path : 'safetyTips', component: SafetyTipsComponent},
  { path : 'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
