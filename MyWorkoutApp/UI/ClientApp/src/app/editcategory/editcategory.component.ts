import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'util';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../Category';

@Component({
  selector: 'edit-categories',
    templateUrl: './editcategory.component.html',
    styleUrls: ['./editcategory.component.css']
})
/** editcategory component*/
export class EditcategoryComponent implements OnInit {
/** editcategory ctor */
  public click: boolean = false;
  fg: FormGroup;
  cat: Category;
  @Input() addname: Category;

  constructor(private service: CategoryService, private fb: FormBuilder) {

  }
  get f() {
    return this.fg.controls;
  }


  ngOnInit() {
    this.fg = this.fb.group({

      catagoryname: new FormControl(this.addname.Category_Name, [Validators.required, Validators.minLength(3)])
    });

  }

  delete() {
    this.service.delete(this.cat.Category_id).subscribe(
      (data) => alert('Deleted'),
      (error) => alert('Failed to delete'));
  }
  save(frm: NgForm) {

    if (frm.valid) {
     
      let cat: Category = new Category(frm.value.category_id, frm.value.category_name);
      this.service.update(cat).subscribe(
        (data) => alert("updated"),
        (error) => console.log(error)
      );

    }
  }
   enable() {
   // this.f.catagoryname.enable();
    this.click = true;
  }

  disable() {
    this.click = false;
  }

 
  }



