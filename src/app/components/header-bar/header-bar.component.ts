import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  options: string[] = ["Home", "About", "Skills", "Projects", "Contact"];
  activeIndex: number | null = null; // Indica o índice do item ativo

  constructor() { }

  ngOnInit(): void { }

  isClicked(index: number): boolean {
    return this.activeIndex === index;
  }

  setActive(index: number): void {
    if (this.activeIndex === index) {
      return; 
    }
    this.activeIndex = index; 
  }
}
