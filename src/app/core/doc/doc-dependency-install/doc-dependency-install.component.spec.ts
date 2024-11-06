import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocDependencyInstallComponent } from './doc-dependency-install.component';

describe('DocDependencyInstallComponent', () => {
  let component: DocDependencyInstallComponent;
  let fixture: ComponentFixture<DocDependencyInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocDependencyInstallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocDependencyInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
