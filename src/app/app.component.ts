import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data: Menu[] = [];
  constructor(service: MenuService) {
    // me suscribo
    service.loadMenu().subscribe(x => this.data = x);
  }
}
