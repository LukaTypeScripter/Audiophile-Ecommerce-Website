import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  resizeEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.initResizeListener();
  }

  private initResizeListener(): void {
    window.addEventListener('resize', () => {
      this.resizeEvent.emit();
    });
  }
}
