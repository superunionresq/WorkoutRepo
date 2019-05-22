import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../Category';
import { WorkoutService } from '../workout.service';
import { Workout } from '../Workout';
@Component({
  selector: 'add-workout',
    templateUrl: './addworkout.component.html',
    styleUrls: ['./addworkout.component.css']
})
/** addworkout component*/
export class AddworkoutComponent implements OnInit {
  frmWorkout: FormGroup;
  public count: number = 0;
  categories: Category[];
  /** addworkout ctor */
  constructor(private fb: FormBuilder, private service: CategoryService, private workservice: WorkoutService) {
    this.frmWorkout = this.fb.group({
      Title: new FormControl('', Validators.required),
      Note: new FormControl('', Validators.required),
      Calory: new FormControl(0, [Validators.required]),
      Categ: new FormControl()
    });

    
    
  }
  get f() { return this.frmWorkout.controls; }
  ngOnInit() {

    this.service.getCategories().subscribe(
      (data) => this.categories = data,
      (error) => alert('Error')
    );
  }

  inc() {
    this.count = this.count + 0.1;
    this.f.Calory.setValue(this.count);
  }

  dec() {
    if (this.count > 0) {
      this.count = this.count - 0.1;
    }
    else {
      this.count = 0;
    }
    this.f.Calory.setValue(this.count);
  }

  enable() {
    alert("Workout Added!");
  }

  saveForm(frm: NgForm) {
    if (frm.valid) {
      let work: Workout = new Workout(frm.value.Title, frm.value.Note, frm.value.Calory, frm.value.Categ, 0);
      this.workservice.save(work).subscribe(data => alert('added'), error => alert('error adding'));
    }

    
    }
}

