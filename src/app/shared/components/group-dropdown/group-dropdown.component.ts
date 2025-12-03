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
import { ApiService, GroupItem } from 'app/core/services/api.service';

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

  private api = inject(ApiService);

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    this.loading = true;
    try {
      this.groups = await this.api.getGroups();
    } catch (err: any) {
      console.error('Failed to load groups', err);
      await this.api.showToast('Failed to load groups', 'danger');
    } finally {
      this.loading = false;
    }
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
