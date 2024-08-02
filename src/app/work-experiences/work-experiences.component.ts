import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../work-experience';

@Component({
  selector: 'app-work-experiences',
  standalone: true,
  imports: [NgFor],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.css'
})
export class WorkExperiencesComponent implements OnInit {

  ngOnInit(): void {
    this.workExperiences = [
      {
        company: 'SystemEXE Vietnam',
        position: 'Software Developer Fresher',
        workTime: 'Mar 2023 - May 2024',
        responsibilities: [
          'Collaborated in a 2-member team to upgrade two desktop application projects (Windows Forms, Eclipse SWT), ensuring compatibility with the latest versions of databases and operating systems.This resulted in a 10 % performance improvement and 20 % reduction in support tickets.',
          'Designed comprehensive test cases and executed manual tests to ensure that software meet requirements and to identify and resolve critical defects.',
          'Provided technical support via Microsoft Teams, resolving installation issues and configuration problems for customers encountering software issues.'
        ],
        skills: [
          'Java',
          'Eclipse SWT',
          'JUnit 5',
          'Mockito',
          '.NET Framework',
          'Windows Forms',
          'SQL Server',
          'Oracle Database',
          'PostgreSQL',
          'SVN',
          'Azure DevOps',
          'GNU/Linux',
          'Windows Server',
          'VMWare',
          'VirtualBox',
          'Microsoft Excel',
          'Microsoft Teams',
          'Visual Studio 2022',
          'Eclipse IDE'
        ]
      },
      {
        company: 'R2S Corporation',
        position: 'Java Backend Developer Intern',
        workTime: 'Sep 2021 - Jan 2022',
        responsibilities: [
          'Managed a development team of 4 members, ensuring the on-time delivery and high-quality deliverables.',
          'Developed a RESTful web API using Spring Boot for a microservice project, enabling secure and efficient data exchange between a ReactJS web application and a MySQL database'
        ],
        skills: [
          'Java',
          'JHipster',
          'JUnit 5',
          'Mockito',
          'ReactJS',
          'Maven',
          'MySQL',
          'GitLab',
          'Docker',
          'Trello',
          'ClickUp',
          'Eclipse IDE',
          'Visual Studio Code'
        ]
      }
    ];
  }

  workExperiences: WorkExperience[] = [];
}
