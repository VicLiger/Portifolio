import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideMenuComponent } from "./Components/aside-menu/aside-menu.component";
import { BasicTitleComponent } from './Components/basic-title/basic-title.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsideMenuComponent, BasicTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portifolio';
}
