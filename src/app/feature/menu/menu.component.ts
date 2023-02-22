import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router) { }

  redirect(value: string) {
    switch (value) {
      case 'home':
        this.router.navigate([`home`]);
        break;
      case 'usuarios':
        this.router.navigate([`usuarios`]);
        break;
      case 'productos':
        this.router.navigate([`productos`]);
        break;
      default:
        break;
    }
  }
}
