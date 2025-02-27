import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-professional-infos',
  imports: [NzButtonModule, NzIconModule, NzInputModule ,RouterLink],
  templateUrl: './professional-infos.component.html',
  styleUrl: './professional-infos.component.scss'
})
export class ProfessionalInfosComponent {

}
