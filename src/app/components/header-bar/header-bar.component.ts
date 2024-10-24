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

  // Método para definir o item ativo
  setActive(index: number): void {
    this.activeItem = index; // Armazena o índice do item clicado
  }

  // Verifica se o item é o ativo
  isClicked(index: number): boolean {
    return this.activeItem === index; // Retorna true se o item for o ativo
  }

  // Método para alternar a visibilidade do menu
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
