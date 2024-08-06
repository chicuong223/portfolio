import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../PROJECTS';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent implements OnInit {
  ngOnInit(): void {
    this.projects = PROJECTS;
  }

  projects: Project[] = [];

}
