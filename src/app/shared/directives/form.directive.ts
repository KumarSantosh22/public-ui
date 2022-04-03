import { Directive, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';


@Directive({
  selector: '[gForm]' //g stands for general here
})
export class FormDirective implements OnInit, OnChanges {

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    console.log('el', this.el.nativeElement.type)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.validate();
  }

  validate() {
    if (this.el.nativeElement.type === 'email') {
      console.log('elem', this.el.nativeElement)

    }
  }

}
