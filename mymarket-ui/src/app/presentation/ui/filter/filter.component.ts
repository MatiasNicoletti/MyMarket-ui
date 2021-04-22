import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { MyErrorStateMatcher } from 'src/app/utils/myErrorStateMatcher';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
  isOpen: boolean = false;
  filterForm: FormGroup;
  matcher;
  productName: string;
  constructor(
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.commonService.aClickedEvent
      .subscribe((data) => {
        this.isOpen = data.openFilter;
        this.productName = data.productName ? data.productName : '';
        this.filterForm.controls.productName.setValue(this.productName);
      });
    this.initForm();
  }

  onSubmit() {
    if(this.filterForm.valid){
      console.log(this.filterForm.value);
      const values = Object.keys(this.filterForm.value)
      let queryParams: any = [];
  
      values.forEach((key) => {
        if (this.filterForm.value[key] && key != 'productName') {
          queryParams.push(key);
        }
      });
      queryParams = queryParams.join(',');
      this.router.navigate(['offer'], { queryParams: { categorias: queryParams, nombre: this.filterForm.value.productName } });
      this.isOpen = false;
    }
    
  }

  private initForm() {
    this.filterForm = new FormGroup({
      productName: new FormControl(this.productName, [Validators.required]),
      ubication: new FormControl('', []),
      ubication2: new FormControl('', []),
      ubication3: new FormControl('', []),
      ubication4: new FormControl('', []),
      bebidas: new FormControl('', []),
      almacen: new FormControl('', []),
      verduras: new FormControl('', []),
    });
    this.matcher = new MyErrorStateMatcher();
  }

  switchFilter() {
    this.isOpen = false;
  }
}
