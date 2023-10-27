import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  menus = [
    {menuName:"Home",path:''},
    {menuName:"About Us",path:'/about-us'},
    {menuName:"Order Now",path:'/order-now'},
    {menuName:"Safety Tips",path:'/safetyTips'},
    {menuName:"Contact US",path:'/contact-us'},
  ]
}
