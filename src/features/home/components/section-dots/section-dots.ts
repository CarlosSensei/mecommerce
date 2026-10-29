import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-section-dots',
  standalone: true,
  templateUrl: './section-dots.html',
  styleUrl: './section-dots.css'
})
export class SectionDotsComponent {

  @Input()
  totalSections = 0;

  @Input()
  activeSection = 0;

  ngOnInit() {
    console.log('DOTS totalSections', this.totalSections);
  }

  ngOnChanges() {
    console.log('DOTS changed', this.totalSections);
  } 

  @Output()
  navigate = new EventEmitter<number>();

  get dots(): number[] {

    return Array.from(
      { length: this.totalSections },
      (_, index) => index
    );

  }

  goTo(index: number): void {

    this.navigate.emit(index);

  }

}