import { Component, ElementRef, AfterViewInit, Renderer2, ViewChild, NgZone, inject } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})

export class EmployeeCardComponent implements AfterViewInit {
  height!: number;
  width!: number;
  animationFrameId: any;
  renderer = inject(Renderer2);
  ngZone = inject(NgZone);

  @ViewChild('employeeCard') employeeCard!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    const nativeElement = this.employeeCard.nativeElement;
    this.height = nativeElement.clientHeight;
    this.width = nativeElement.clientWidth;
    this.ngZone.runOutsideAngular(() => this.addMouseEvents());
  }

  addMouseEvents(): void {
    const card = this.employeeCard.nativeElement;

    const onMouseMove = (event: MouseEvent) => {
      const xVal = event.layerX;
      const yVal = event.layerY;
      const yRotation = 20 * ((xVal - this.width / 2) / this.width);
      const xRotation = -20 * ((yVal - this.height / 2) / this.height);
      const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
      this.animationFrameId = requestAnimationFrame(() => {
        this.renderer.setStyle(card, 'transform', transformString);
      });
    };

    const onMouseOut = () => {
      const transformString = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
      this.renderer.setStyle(card, 'transform', transformString);
    };

    const onMouseDown = () => {
      const transformString = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
      this.renderer.setStyle(card, 'transform', transformString);
    };

    const onMouseUp = () => {
      const transformString = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
      this.renderer.setStyle(card, 'transform', transformString);
    };

    this.renderer.listen(card, 'mousemove', onMouseMove);
    this.renderer.listen(card, 'mouseout', onMouseOut);
    this.renderer.listen(card, 'mousedown', onMouseDown);
    this.renderer.listen(card, 'mouseup', onMouseUp);
  }
}
