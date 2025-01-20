import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-aside-menu',
  imports: [
    CommonModule
  ],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.css'
})
export class AsideMenuComponent implements OnInit{
  ngOnInit(): void {
    this.onMouseOver(0, this.navigationItems[0]);
  }
  activeIndex: number = 0; // Para garantir que o primeiro item tenha a classe "active"

  navigationItems = [
    { icon: 'fa-solid fa-house', text: 'Home', color: '#5d62fb' },
    { icon: 'fa-solid fa-user', text: 'Profile', color: '#5d62fb' },
    { icon: 'fa-solid fa-laptop', text: 'Skills', color: '#5d62fb' },
    { icon: 'fa-solid fa-folder', text: 'Projects', color: '#5d62fb' },
    { icon: 'fa-solid fa-phone', text: 'Contact', color: '#5d62fb' }
  ];

  indicatorStyle = {
    'background': '#f53b57',
    'transform': 'translateX(0px)',
    'box-shadow': '0'
  };

  onMouseOver(index: number, item: any) {
    this.activeIndex = index; // Atualiza o item ativo
    this.indicatorStyle = {
      'background': item.color,
      'transform': `translateX(${index * 80}px)`,
      'box-shadow': `0 0 35px ${item.color}` // Adicionando o box-shadow com a cor do item
    };
  }
  
  
}

