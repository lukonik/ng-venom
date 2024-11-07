import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocComponentSourceComponent } from './doc-component-source.component';

describe('DocComponentSourceComponent', () => {
  let component: DocComponentSourceComponent;
  let fixture: ComponentFixture<DocComponentSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocComponentSourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocComponentSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
