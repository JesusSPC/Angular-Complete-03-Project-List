import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';

@Component({
  selector: 'pro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  collapsed = true;

  constructor(private dsService: DataStorageService,
              private authService: AuthService) {}

  ngOnInit() {
    this.userSub = this.authService.user
      .subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      })
  }

  onSaveData() {
    this.dsService.storeRecipes();
  }

  onFetchData() {
    this.dsService.fetchRecipes()
      .subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}