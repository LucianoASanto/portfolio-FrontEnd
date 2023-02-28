import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string ="";
  day: string ="";
  remainder:boolean=false;
  showAddTask: boolean=false;
  subscription?: Subscription;
  
constructor(
  private uiservice: UiService
){
  this.subscription = this.uiservice.onToggle()
                                .subscribe(value => this.showAddTask = value)
}

  onSubmit(){
    if(this.text.length === 0){
      alert("Please add a task!")
      return 
    }
    
    const{text,day,remainder} = this
    const newTask = {text,day,remainder}

    this.onAddTask.emit(newTask);
  }

  
}
