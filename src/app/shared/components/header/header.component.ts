import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonHeader, IonToolbar, IonTitle, IonIcon, IonButton, IonButtons} from '@ionic/angular/standalone';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import {Capacitor} from '@capacitor/core';
import {NavigationEnd, Router} from '@angular/router';
import { Location } from '@angular/common';
import {filter} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, LogoutButtonComponent, IonIcon, IonButton, IonButtons]
})
export class HeaderComponent implements OnInit {

  @Input() showLogout = true;
  @Output() logout = new EventEmitter<void>();
  showBackButtonOnNativeDevice = false;
  constructor(private location: Location, private router: Router) { }
  isNative = Capacitor.isNativePlatform();

  ngOnInit() {
    this.updateBackButton(this.isNative, this.router.url);
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateBackButton(this.isNative, event.urlAfterRedirects);
      });
  }

  private updateBackButton(isNative: boolean, path: string) {
    this.showBackButtonOnNativeDevice =
      isNative && path.startsWith('/forms');
  }

  onLogout(): void {
	  this.logout.emit();
  }

  onBackClick(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      // fallback route
      this.router.navigateByUrl('/groups');
    }
  }
}

