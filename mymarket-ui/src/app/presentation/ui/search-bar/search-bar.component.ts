import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    if(!this.searchForm.valid){
      return
    }
    console.log(this.searchForm);
    this.router.navigate(['ofertas'], {queryParams: {producto: this.searchForm.value.search}});
  }

  private initForm(){
    this.searchForm = new FormGroup({
      search: new FormControl(''/*, [Validators.required]*/)
    })
  }
}
