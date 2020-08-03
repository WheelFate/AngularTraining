import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks Page';
  Projects=[
    {
      id:'123',
      name:'test',
      type:'test'
    },
    {
      id:'123',
      name:'test',
      type:'test'
    },
    {
      id:'123',
      name:'test',
      type:'test'
    },
    {
      id:'123',
      name:'test',
      type:'test'
    }
  ];
  
  addProject(newProjectLabel){
    var newProject={
      id:newProjectLabel,
      name:'new Project',
      type:'new Project Type'
    };
    this.Projects.push(newProject);
  }

  DeleteProject(project){
    this.Projects=this.Projects.filter(p=>p.id!==project.id);
  }

}
