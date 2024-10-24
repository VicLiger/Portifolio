import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'] // Corrigido para styleUrls
})
export class HeaderBarComponent implements OnInit {
  
  optionsList: string[] = ["Home", "About", "Technologies", "Projects", "Contact"];
  activeItem: number | null = null; // Armazena o item ativo
  isMenuVisible: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  setActive(item: number): void {
    this.activeItem = item; // Define o item clicado como ativo
  }

  isClicked(item: number): boolean {
    return this.activeItem === item; // Verifica se o item é o ativo
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible; 
    console.log('Menu visibility:', this.isMenuVisible); // Log para verificar o estado
}
}
