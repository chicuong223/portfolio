import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../work-experience';
import { WORK_EXPERIENCES } from '../WORK_EXPERIENCES';

@Component({
  selector: 'app-work-experiences',
  standalone: true,
  imports: [NgFor],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.css'
})
export class WorkExperiencesComponent implements OnInit {

  ngOnInit(): void {
    this.workExperiences = WORK_EXPERIENCES;
  }

  workExperiences: WorkExperience[] = [];
}
