import { Component, Output, EventEmitter } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css'
})
export class CtaSectionComponent {

  @Output()
  navigate = new EventEmitter<string>();

  goTo(id: string): void {
    this.navigate.emit(id);
  }

  goToContact(): void {

    window.open(
      'https://carlossensei.github.io/Portfolio/',
      '_blank'
    );
  }

}