import { AfterViewInit, Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HomeScrollService } from '../service/home-scroll.service';
import { HomeSectionService } from '../service/home-section.service';
import { PRODUCTS } from '../../products/model/product.mock';
import { ManifestoSectionComponent } from '../components/manifesto-section/manifesto-section';
import { ProductPanelComponent } from '../components/product-panel/product-panel';
import { HeroSectionComponent } from '../components/hero-section/hero-section';
import { CtaSectionComponent } from '../components/cta-section/cta-section';
import { SectionDotsComponent } from '../components/section-dots/section-dots';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ManifestoSectionComponent,
    ProductPanelComponent,
    CtaSectionComponent,
    SectionDotsComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class HomeComponent implements AfterViewInit {

  products = PRODUCTS;
  activeSection = 0;
  totalSections = 0;

  @ViewChild('wrapper')
  wrapper!: ElementRef<HTMLDivElement>;

  constructor(
    private homeScroll: HomeScrollService,
    public homeSection: HomeSectionService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {

    const wrapper =
      this.wrapper.nativeElement;

    this.homeSection
      .updateActivePanel(wrapper);

    requestAnimationFrame(() => {

      this.totalSections =
        this.wrapper.nativeElement
          .querySelectorAll('.panel')
          .length;
      
      this.homeSection.updateActivePanel(wrapper);
      this.activeSection = this.homeSection.activeSection;

      this.cdr.detectChanges();

    });

    setTimeout(() => {

      this.totalSections =
        this.wrapper.nativeElement
          .querySelectorAll('.panel')
          .length;

    }, 0);

    wrapper.addEventListener(
      'scroll',
      () => {

        this.homeSection
          .updateActivePanel(wrapper);

        this.activeSection = this.homeSection.activeSection;
        this.cdr.detectChanges();
      }
    );

    wrapper.addEventListener(
      'wheel',
      (event: WheelEvent) => {

        event.preventDefault();

        if (event.deltaY > 0) {

          this.homeScroll
            .scrollToNext(wrapper);

        } else {

          this.homeScroll
            .scrollToPrevious(wrapper);

        }

      },
      { passive: false }
    );

  }

  goToSection(index: number): void {

    this.homeScroll.goToSection(
      this.wrapper.nativeElement,
      index
    );

  }


}