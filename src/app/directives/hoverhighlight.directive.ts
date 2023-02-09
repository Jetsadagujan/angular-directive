import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverhighlight]',
})
export class HoverhighlightDirective {
  @Input() appHoverhighlightColor = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverhighlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  // function for change style
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
