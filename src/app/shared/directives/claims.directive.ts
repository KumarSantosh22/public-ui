import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[gClaims]'
})
export class ClaimsDirective implements OnInit, OnChanges  {
  @Input() gClaim = '';
  @Input() action = '';
  elementTypes = ['input', 'select', 'button'];
  db: any;
  constructor(
    private elem: ElementRef,
  ) { }

  ngOnInit(): void {
    console.log('native element', this.elem);

    this.checkClaim();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('gClaims', changes);
    this.checkClaim();
  }

  checkClaim() {
    console.log('text', this.gClaim);
    if (this.gClaim) {
      if (this.db.user.hasClaim(this.gClaim)) {
        // this.elem.nativeElement.disabled = true;
        const elements = this.getElements();
        this.doReadOnly(elements);
      }
    };
  }

  getElements() {
    const elements = this.elem.nativeElement.
      querySelectorAll(this.elementTypes.join(','));
    return elements;
  }

  doReadOnly(elements: any) {
    for (let i = 0; i < elements.length; i++) {
      if (this.action === 'hide') {
        elements[i].style.display = 'none';
      } else {
        elements[i].disabled = true;
      }
    };
  }

}
