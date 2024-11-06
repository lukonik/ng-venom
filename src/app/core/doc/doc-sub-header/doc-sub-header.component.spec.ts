import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSubHeaderComponent } from './doc-sub-header.component';

describe('DocSubHeaderComponent', () => {
  let component: DocSubHeaderComponent;
  let fixture: ComponentFixture<DocSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocSubHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
