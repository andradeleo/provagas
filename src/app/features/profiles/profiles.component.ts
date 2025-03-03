import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LocalStorageService } from '../../../core/localstorage/local-storage.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageKeys } from '../../constants/local-storage-keys';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '../shared/components/dinamyc-form/dynamic-form.component';

@Component({
  selector: 'profiles',
  imports: [CommonModule, NzButtonModule, NzIconModule, NzInputModule ,RouterLink, ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss'
})
export class ProfilesComponent implements OnInit {
  protected form: FormGroup;
  public localStorage: LocalStorageService = inject(LocalStorageService)

  constructor() {
    // TODO
    // refatorar form seguindo esse vídeo: https://www.youtube.com/watch?v=-E-0Gv0yNwY
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      description: new FormControl(null, [Validators.required]),
      links: new FormControl([])
    })
  }

  public ngOnInit(): void {
    // TODO
    // Verificar se o serviço localStorage não deveria extender Storage
    const professionalFormData = this.localStorage.get(LocalStorageKeys.professionalFormData);
    if(professionalFormData) this.form.patchValue(professionalFormData);
  }

  public submit() {
    if(this.form.invalid) return;
    const submittedData = this.form.value;
    this.localStorage.set(LocalStorageKeys.professionalFormData, submittedData);
  }
}
