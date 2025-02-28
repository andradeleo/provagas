import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LocalStorageService } from '../../../core/localstorage/local-storage.service';
import { LocalStorageKeys } from '../../constants/local-storage-keys';

@Component({
  selector: 'app-dashboard',
  imports: [NzButtonModule, NzIconModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public disabled: boolean = true;
  protected storage: LocalStorageService = inject(LocalStorageService)

  public ngOnInit(): void {
    const data = this.storage.get(LocalStorageKeys.professionalFormData);

    this.disabled = data ? false : true;
  }

  public generate() {
  }
}
