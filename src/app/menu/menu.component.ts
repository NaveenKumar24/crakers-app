import { Component, Input, Inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  // menus = ['Home', 'About Us', 'Order Now', 'Safety Tips', 'Contact Us']
  menus = [
    {menuName:"Home",path:''},
    {menuName:"About Us",path:'/about-us'},
    {menuName:"Order Now",path:'/order-now'},
    {menuName:"Safety Tips",path:'/safetyTips'},
    {menuName:"Contact US",path:'/contact-us'},
  ]

  constructor(
    @Inject(RouterLinkActive) public active: RouterLinkActive
  ) {}

}
