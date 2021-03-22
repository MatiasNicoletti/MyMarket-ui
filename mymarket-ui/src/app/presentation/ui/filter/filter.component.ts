import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
  isOpen: boolean = false;
  filterForm: FormGroup;

  constructor(
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.commonService.aClickedEvent
      .subscribe((data: boolean) => {
        this.isOpen = data;
      });
  }

  onSubmit() {
    console.log(this.filterForm.value);
    const values = Object.keys(this.filterForm.value)
    let queryParams:any = [];

    values.forEach((key) => {
      if (this.filterForm.value[key]) { 
        // console.log(key);
        queryParams.push(key);
      }
    });
    queryParams = queryParams.join(',');
    console.log(queryParams)

    this.router.navigate(['ofertas'], {queryParams: {categorias: queryParams, producto: 'harina'}});
  }

  private initForm() {
    this.filterForm = new FormGroup({
      ubication: new FormControl('', []),
      ubication2: new FormControl('', []),
      ubication3: new FormControl('', []),
      ubication4: new FormControl('', []),
      bebidas: new FormControl('', []),
      perfumeria: new FormControl('', []),
      verduras: new FormControl('', []),
    })
  }

  switchFilter() {
    this.isOpen = false;
  }
}
