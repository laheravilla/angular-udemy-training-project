import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService]
})
export class CreateProjectComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;

  constructor(
    private _projectService: ProjectService
  ) {
    this.title = 'Create Project';
    this.project = new Project('', '', '', '', 2019, '', '');
  }

  ngOnInit() {}

  onSubmit(form)
  {
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {
          this.status = 'success';
          form.reset(); // Empty form if success
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
