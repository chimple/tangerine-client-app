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
  showBackButton = false;
  constructor(private location: Location, private router: Router) { }
  isNative = Capacitor.isNativePlatform();

  ngOnInit() {
    this.updateBackButton(this.router.url);
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateBackButton(event.urlAfterRedirects);
      });
  }

  private updateBackButton(path: string) {
    console.log(path)
    this.showBackButton = path.startsWith('/forms');
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

