import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LocalStorageService } from '../../../core/localstorage/local-storage.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageKeys } from '../../constants/local-storage-keys';

@Component({
  selector: 'app-professional-infos',
  imports: [NzButtonModule, NzIconModule, NzInputModule ,RouterLink, ReactiveFormsModule],
  templateUrl: './professional-infos.component.html',
  styleUrl: './professional-infos.component.scss'
})
export class ProfessionalInfosComponent implements OnInit {
  protected form: FormGroup;

  constructor(private localStorage: LocalStorageService) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      company: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      job_title: new FormControl(null, [Validators.required]),
    })
  }

  public ngOnInit(): void {
    const professionalFormData = this.localStorage.get(LocalStorageKeys.professionalFormData);
    this.form.setValue(professionalFormData);
  }

  public submit() {
    if(this.form.invalid) return;

    const submittedData = this.form.value;
    this.localStorage.set(LocalStorageKeys.professionalFormData, submittedData);
  }
}
