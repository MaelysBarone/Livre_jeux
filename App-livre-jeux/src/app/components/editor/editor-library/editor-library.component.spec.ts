import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorLibraryComponent } from './editor-library.component';

describe('EditorLibraryComponent', () => {
  let component: EditorLibraryComponent;
  let fixture: ComponentFixture<EditorLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
