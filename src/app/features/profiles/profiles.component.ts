import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'profiles',
  imports: [CommonModule, NzButtonModule, NzIconModule, NzCardModule, RouterLink],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss'
})
export class ProfilesComponent implements OnInit {
  @ViewChild('editTemplate', { static: true }) editTemplate!: TemplateRef<void>;
  @ViewChild('deleteTemplate', { static: true }) deleteTemplate!: TemplateRef<void>;

  cardActions: TemplateRef<void>[] = [];

  public ngOnInit(): void {
    this.cardActions = [this.editTemplate, this.deleteTemplate];
  }
}
