import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ForumService} from '../../../service/forum.service';
import {SecurityLocalStorageService} from '../../../service/security-local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private forumService: ForumService,
              private router: Router) {
  }

  ngOnInit() {
  }

  getToken(userName: string, password: string): void {
    const user = 'grant_type=password&username=' + userName + '&password=' + password;
    this.forumService.postToken(user)
      .subscribe(data => SecurityLocalStorageService.setCurrentUser(data));
    alert('Ви ввійшли на форум');
    this.router.navigate(['forum']);
  }

}
