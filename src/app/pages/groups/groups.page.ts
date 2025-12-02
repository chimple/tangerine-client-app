import { Component } from '@angular/core';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { GroupDropdownComponent } from 'app/shared/components/group-dropdown/group-dropdown.component';

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
export class GroupsPage {}
