import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSectionComponent {

  @Output()
  navigate = new EventEmitter<string>();

  goTo(id: string): void {
    this.navigate.emit(id);
  }

}