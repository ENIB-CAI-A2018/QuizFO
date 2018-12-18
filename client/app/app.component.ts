import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {QuizeService} from './services/quize.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[QuizeService,TaskService]
})

export class AppComponent { }
