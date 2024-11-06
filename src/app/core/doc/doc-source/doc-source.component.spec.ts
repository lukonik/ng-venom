import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSourceComponent } from './doc-source.component';

describe('DocSourceComponent', () => {
  let component: DocSourceComponent;
  let fixture: ComponentFixture<DocSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocSourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
