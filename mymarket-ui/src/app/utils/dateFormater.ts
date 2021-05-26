import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormater {
  constructor() { }
  formatDate(date) {
    if (date) {
      const currentdate = new Date(date);
      return new Date(currentdate.getFullYear(), currentdate.getMonth(), currentdate.getDate(), currentdate.getHours(), currentdate.getMinutes());
    }
  }
}