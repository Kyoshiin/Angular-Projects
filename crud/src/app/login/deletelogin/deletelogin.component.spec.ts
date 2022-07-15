import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteloginComponent } from './deletelogin.component';

describe('DeleteloginComponent', () => {
  let component: DeleteloginComponent;
  let fixture: ComponentFixture<DeleteloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
