import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  isOpen: boolean = false;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.aClickedEvent
      .subscribe((data: boolean) => {
        this.isOpen = data;
      });
  }

  switchFilter() {
    this.isOpen = false;
  }
}
