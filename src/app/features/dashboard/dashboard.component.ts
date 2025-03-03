import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LocalStorageService } from '../../../core/localstorage/local-storage.service';
import { LocalStorageKeys } from '../../constants/local-storage-keys';
import { ResumeService } from '../shared/resume.service';

@Component({
  selector: 'app-dashboard',
  imports: [NzButtonModule, NzIconModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public disabled: boolean = true;
  public professionalUserData: any = {};
  protected storage: LocalStorageService = inject(LocalStorageService)
  protected resumeService: ResumeService = inject(ResumeService)

  public ngOnInit(): void {
    const data = this.storage.get(LocalStorageKeys.professionalFormData);
    this.professionalUserData = data;
    this.disabled = data ? false : true;
  }

  public generate() {
    // TODO
    // Criar serviço que lida com a criação do currículo com as infos do profile.
    // Esse serviço deve ser no pattern build.
    // Deve ser extensível.
    const data = this.resumeService.build(this.professionalUserData);
  }
}
