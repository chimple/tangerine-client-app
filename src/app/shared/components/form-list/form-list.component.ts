import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonLabel, IonIcon, IonSpinner, IonNote, IonListHeader } from '@ionic/angular/standalone';
import { PublishedForm } from 'app/core/services/api.service';


@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonSpinner,
    IonNote,
    IonListHeader
  ]
})
export class FormListComponent {
  @Input() forms: PublishedForm[] = [];
  @Input() loading = false;

  @Output() formSelect = new EventEmitter<PublishedForm>();

  onFormClick(form: PublishedForm): void {
    this.formSelect.emit(form);
  }
}
