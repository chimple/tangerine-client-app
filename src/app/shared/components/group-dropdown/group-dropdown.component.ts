import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonSpinner
} from '@ionic/angular/standalone';
import { GroupItem } from 'app/core/services/api.service';

@Component({
  selector: 'app-group-dropdown',
  templateUrl: './group-dropdown.component.html',
  styleUrls: ['./group-dropdown.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonButton,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonSpinner,
    IonCard,
    IonCardContent,
  ]
})
export class GroupDropdownComponent {
  @Input() groups: GroupItem[] = [];
  @Input() selectedGroupId?: string;
  @Input() loading = false;

  @Output() selectionChange = new EventEmitter<string>();
  @Output() confirmClick = new EventEmitter<void>();

  onSelectChange(id?: string | null): void {
    if (!id) return;
    this.selectionChange.emit(id);
  }

  confirmSelection(): void {
    if (!this.selectedGroupId) return;
    this.confirmClick.emit();
  }
}
