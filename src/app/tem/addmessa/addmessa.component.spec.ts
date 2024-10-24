import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmessaComponent } from './addmessa.component';

describe('AddmessaComponent', () => {
  let component: AddmessaComponent;
  let fixture: ComponentFixture<AddmessaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddmessaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
