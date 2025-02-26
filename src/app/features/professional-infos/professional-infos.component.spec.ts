import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalInfosComponent } from './professional-infos.component';

describe('ProfessionalInfosComponent', () => {
  let component: ProfessionalInfosComponent;
  let fixture: ComponentFixture<ProfessionalInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
