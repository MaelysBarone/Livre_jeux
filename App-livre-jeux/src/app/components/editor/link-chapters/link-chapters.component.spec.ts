import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkChaptersComponent } from './link-chapters.component';

describe('LinkChaptersComponent', () => {
  let component: LinkChaptersComponent;
  let fixture: ComponentFixture<LinkChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkChaptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
