import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, LogoutButtonComponent]
})
export class HeaderComponent {
  @Input() showLogout = true;
  @Output() logout = new EventEmitter<void>();
  
  onLogout(): void {
	this.logout.emit();
  }
}

