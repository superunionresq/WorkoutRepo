import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'util';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { Workout } from '../Workout';

@Component({
  selector: 'crud-workout',
    templateUrl: './crudworkout.component.html',
    styleUrls: ['./crudworkout.component.css']
})
/** Crudworkout component*/
export class CrudworkoutComponent implements OnInit {
  fg: FormGroup;
  work: Workout;
  @Input() addName: Workout;
  /** Crudworkout ctor */
  constructor(private service: WorkoutService, private fb: FormBuilder) {

  }
  ngOnInit() {
    this.fg = this.fb.group({

      workoutname: new FormControl(this.addName.WorkOut_Title, [Validators.required, Validators.minLength(3)])
    });
  }


}
