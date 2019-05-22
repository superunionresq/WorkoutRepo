
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { EventEmitter } from 'events';
import { CategoryService } from '../category.service';
import { Category } from '../Category';

@Component({
  selector: 'add-category',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
/** addcategory component*/
export class AddcategoryComponent implements OnInit {
/** addcategory ctor */
  frmCate: FormGroup;
  constructor(private fb: FormBuilder, private service: CategoryService) { }

  ngOnInit() {

    this.frmCate = this.fb.group({

      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

  }
  get f() {
    return this.frmCate.controls;
  }
  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cate: Category = new Category(frm.value.category_id, frm.value.name);
      this.service.save(cate).subscribe(
        (data) => alert('Added'),
        (error) => console.log(error)
      );
    }


  }
}
