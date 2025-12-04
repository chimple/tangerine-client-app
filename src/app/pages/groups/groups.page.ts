import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { GroupDropdownComponent } from 'app/shared/components/group-dropdown/group-dropdown.component';
import { ApiService, GroupItem } from 'app/core/services/api.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    GroupDropdownComponent
  ]
})
export class GroupsPage implements OnInit {
  groups: GroupItem[] = [];
  selectedId?: string;
  loading = false;

  private api = inject(ApiService);
  private router = inject(Router);

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

  onSelectionChange(id: string): void {
    this.selectedId = id;
  }

  async onConfirmSelection(): Promise<void> {
    if (!this.selectedId) return;
    console.log('Confirmed group id:', this.selectedId);
  }
}
