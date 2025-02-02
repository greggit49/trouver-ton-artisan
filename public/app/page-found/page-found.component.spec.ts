import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFoundComponent } from './page-found.component';

describe('PageFoundComponent', () => {
  let component: PageFoundComponent;
  let fixture: ComponentFixture<PageFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
