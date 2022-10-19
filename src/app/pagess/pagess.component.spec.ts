import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagessComponent } from './pagess.component';

describe('PagessComponent', () => {
  let component: PagessComponent;
  let fixture: ComponentFixture<PagessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
