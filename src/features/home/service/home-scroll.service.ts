import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeScrollService {

  private isScrolling = false;

  private getCurrentSection(
    wrapper: HTMLDivElement
  ): number {

    return Math.round(
      wrapper.scrollLeft / window.innerWidth
    );

  }

  private getTotalSections(
    wrapper: HTMLDivElement
  ): number {

    return wrapper
      .querySelectorAll('.panel')
      .length;

  }

  scrollToNext(
    wrapper: HTMLDivElement
  ): void {

    if (this.isScrolling) {
      return;
    }

    const current =
      this.getCurrentSection(wrapper);

    this.goToSection(
      wrapper,
      current + 1
    );

  }

  scrollToPrevious(
    wrapper: HTMLDivElement
  ): void {

    if (this.isScrolling) {
      return;
    }

    const current =
      this.getCurrentSection(wrapper);

    this.goToSection(
      wrapper,
      current - 1
    );

  }

  goToSection(
    wrapper: HTMLDivElement,
    index: number
  ): void {

    const total =
      this.getTotalSections(wrapper);

    const targetIndex = Math.max(
      0,
      Math.min(index, total - 1)
    );

    this.isScrolling = true;

    wrapper.scrollTo({
      left: targetIndex * window.innerWidth,
      behavior: 'smooth'
    });

    setTimeout(() => {
      this.isScrolling = false;
    }, 800);

  }

  goToSectionById(
    wrapper: HTMLDivElement,
    id: string
  ): void {

    const panels = Array.from(
      wrapper.querySelectorAll('.panel')
    );

    const index = panels.findIndex(
      panel => panel.id === id
    );

    if (index !== -1) {
      this.goToSection(wrapper, index);
    }

  }

}
