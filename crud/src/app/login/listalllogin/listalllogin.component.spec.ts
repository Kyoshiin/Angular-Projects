import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallloginComponent } from './listalllogin.component';

describe('ListallloginComponent', () => {
  let component: ListallloginComponent;
  let fixture: ComponentFixture<ListallloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListallloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
