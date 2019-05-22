import { Component, OnInit } from '@angular/core';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'list-workout',
    templateUrl: './listworkouts.component.html',
    styleUrls: ['./listworkouts.component.css']
})
/** listworkouts component*/
export class ListworkoutsComponent implements OnInit {
  /** listworkouts ctor */
  workouts: Workout[];
  constructor(private service: WorkoutService) {
      
  }

  ngOnInit() {
    this.service.getWorkouts().subscribe(
      (data) => this.workouts = data,
      (error) => alert('Error')
    );
  }
}
