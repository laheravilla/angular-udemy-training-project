import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  public url: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProject(id);
    });
  }

  getProject(id) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
