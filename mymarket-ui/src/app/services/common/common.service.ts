import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  @Output() aClickedEvent = new EventEmitter<string>();

  constructor() { }

  emitData(data: any) {
    this.aClickedEvent.emit(data);
  }
}
