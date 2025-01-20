import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTitleComponent } from './basic-title.component';

describe('BasicTitleComponent', () => {
  let component: BasicTitleComponent;
  let fixture: ComponentFixture<BasicTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
