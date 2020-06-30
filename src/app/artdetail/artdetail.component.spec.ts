import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtdetailComponent } from './artdetail.component';

describe('ArtdetailComponent', () => {
  let component: ArtdetailComponent;
  let fixture: ComponentFixture<ArtdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
