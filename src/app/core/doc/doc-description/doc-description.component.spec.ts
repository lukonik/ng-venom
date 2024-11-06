import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocDescriptionComponent } from './doc-description.component';

describe('DocDescriptionComponent', () => {
  let component: DocDescriptionComponent;
  let fixture: ComponentFixture<DocDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
