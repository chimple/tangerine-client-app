import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { GroupDropdownComponent } from 'app/shared/components/group-dropdown/group-dropdown.component';
import { ApiService, GroupItem } from 'app/core/services/api.service';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    GroupDropdownComponent,
    IonContent
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

    try {
      this.api.saveGroupId(this.selectedGroupId);
      await this.router.navigateByUrl(`/forms/${this.selectedGroupId}`);
    } catch (err: any) {
      console.error('Failed to navigate:', err);
      await this.api.showToast('Failed to navigate', 'danger');
    }
  }

  async onLogout(): Promise<void> {
    await this.api.logout();
  }
}
