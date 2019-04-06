import { Directive, Input, OnChanges, SimpleChanges, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})
export class HighlightDirective implements OnChanges {

  @Input() value: number;
  @Input() index: number;
  backgroundColor = '';

  @HostBinding('style.color') textColor = 'black';

  @HostListener('mouseover', ['$event']) mouseoverHandler(event) {
    this.highlight('yellow');
    this.textColor = 'red';
  }

  @HostListener('mouseleave', ['$event']) mouseleaveHandler(event) {
    this.highlight('');
    this.textColor = '';
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    this.highlight(this.value !== this.index ? '' : 'red');
  }

  highlight(color: string) {
    this.backgroundColor = color;
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }

  constructor(public renderer: Renderer2, public elementRef: ElementRef) { }
}
