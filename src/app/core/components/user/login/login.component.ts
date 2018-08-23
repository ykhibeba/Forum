import {Component, OnInit} from '@angular/core';
import {ForumService} from '../../../service/forum.service';
import {SecurityLocalStorageService} from '../../../service/security-local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private forumService: ForumService) {
  }

  ngOnInit() {
  }

  private getToken(userName: string, password: string): void {
    const user = 'grant_type=password&username=' + userName + '&password=' + password;
    this.forumService.postToken(user)
      .subscribe(data => SecurityLocalStorageService.setCurrentUser(data));
  }

}
