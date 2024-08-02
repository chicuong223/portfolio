import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent implements OnInit {
  ngOnInit(): void {
    this.projects = [
      {
        name: 'APMS - Automatic Parking Fee Management System',
        projectTime: 'Sep 2022 - Dec 2022',
        description: 'Graduation capstone project. A semi-automatic system aims to deliver a contactless solution by automating the process of managing public car parks.',
        documentUrl: 'https://docs.google.com/document/d/18FIS1EZEE66Vt5lfAbWlLfsGB7fCB-7h/edit?usp=drive_link&ouid=117087631442614208936&rtpof=true&sd=true',
        repositoryUrl: 'https://gitlab.com/chicuong223/apms-api',
        responsibilities: [
          'Designing the database schema, ensuring the data integrity and constraints meet the project\'s requirements.',
          'Developing the web API that facilitates seamless and secured data exchange between the web application, mobile application and database, and between the IoT devices and Firebase real-time database.'
        ],
        techStack: [
          '.NET 6',
          'Entity Framework Core 6',
          'ReactJS',
          'Flutter',
          'Firebase real-time database',
          'PostgreSQL',
          'Python',
          'Arduino',
          'BitBucket',
          'Amazon Web Service',
          'Git',
          'Docker',
          'PayPal Sandbox'
        ]
      },
      {
        name: 'Startup Competition',
        projectTime: 'Jan 2022 - Mar 2022',
        description: 'Cooperated with University of Economy and Laws for their Startup Competition. A web application that allows competitors to showcase their startup ideas, form groups and compete with each other. Additionally, organizers can evaluate the ideas submitted by groups to determine approval or disapproval.',
        documentUrl: '',
        repositoryUrl: '',
        responsibilities: [
          'Designing the database schema, making sure that the data and constraints meet the project\' requirements',
          'Developing the web API, ensuring efficient and secured data exchange between the web application, mobile application and database.'
        ],
        techStack: [
          '.NET 5',
          'Entity Framework Core 5',
          'ReactJS',
          'Flutter',
          'SQL Server',
          'GitHub',
          'Netlify',
          'Microsoft Azure'
        ]
      },
      {
        name: 'OnlyFunds',
        projectTime: 'May 2021 - Jul 2021',
        description: 'A web application allows users to read, write posts, and create exclusive contents to make income.',
        documentUrl: '',
        repositoryUrl: 'https://github.com/chicuong223/OnlyFunds-Maven',
        responsibilities: [
          'Designing the database schema.',
          'Developing backend functions, ensuring efficient data exchange between end-users and the database.'
        ],
        techStack: [
          'Java EE 8',
          'Maven',
          'HTML 5',
          'CSS3',
          'JavaScript',
          'JQuery',
          'Bootstrap 4',
          'JSTL',
          'JSP',
          'SQL Server',
          'GitHub',
          'PayPal Sandbox'
        ]
      },
    ];
  }

  projects: Project[] = [];

}
