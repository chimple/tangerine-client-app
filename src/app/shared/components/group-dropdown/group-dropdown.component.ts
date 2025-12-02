import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
import { GroupService, GroupItem } from 'app/core/services/group.service';

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
export class GroupDropdownComponent implements OnInit {
  groups: GroupItem[] = [];
  selectedId?: string;
  loading = false;

  private gs = inject(GroupService);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.gs.getGroups().subscribe({
      next: groups => {
        this.groups = groups;
        this.loading = false;
      },
      error: err => {
        console.error('Failed to load groups', err);
        this.loading = false;
      }
    });
  }

  onSelectChange(id?: string | null): void {
    if (!id) return;
    this.selectedId = id;
  }

  confirmSelection(): void {
    if (!this.selectedId) return;
    console.log('Confirmed group id:', this.selectedId);
  }
}
