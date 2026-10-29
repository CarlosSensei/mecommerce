import { Component } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css'
})
export class CtaSectionComponent {}