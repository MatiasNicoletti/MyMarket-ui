import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormater {
  constructor() { }
  formatDate(date) {
    if (date) {
      const currentDate = new Date(date)
      return `${currentDate.getFullYear()}-${("0" + (currentDate.getMonth() + 1)).slice(-2)}-${('0' + currentDate.getDate()).slice(-2)}`;
    }
  }
}