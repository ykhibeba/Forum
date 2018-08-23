import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {IRegistrationModel, RegistrationModel} from './registartion.model';
import {ForumService} from '../../../service/forum.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private forumService: ForumService) {
  }

  ngOnInit() {
  }

  private registerUser(firstName: string, lastName: string, userName: string, email: string,  password: string): void {
    const user = new RegistrationModel(firstName, lastName, userName, email,  password);
    this.forumService.postUser(user)
      .subscribe();
  }
}
