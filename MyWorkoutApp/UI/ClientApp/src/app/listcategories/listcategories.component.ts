import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'list-categories',
    templateUrl: './listcategories.component.html',
    styleUrls: ['./listcategories.component.css']
})
/** listcategories component*/
export class ListcategoriesComponent implements OnInit {
  /** listcategories ctor */
  categories: Category[];
  constructor(private service: CategoryService) {

  }

  ngOnInit() {
    this.service.getCategories().subscribe(
      (data) => this.categories = data,
      (error) => alert('Error')
    );
  }
}
