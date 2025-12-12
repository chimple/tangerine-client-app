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
  selectedGroupId?: string;
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
      await this.api.showToast('Failed to load groups', 'danger');
    } finally {
      this.loading = false;
    }
  }

  onGroupSelectionChange(id: string): void {
    this.selectedGroupId = id;
  }

  async onConfirmGroupSelection(): Promise<void> {
    if (!this.selectedGroupId) return;
     console.log('Confirmed group id:', this.selectedGroupId);

    try {
      const publishedFormsWithTitle = await this.api.getPublishedFormsWithTitle(this.selectedGroupId);
      console.log('Publised Online Survey Forms with title:', publishedFormsWithTitle);
    } catch (err: any) {
      console.error('Failed to fetch forms:', err);
      await this.api.showToast('Failed to fetch forms', 'danger');
    }
  }
}
