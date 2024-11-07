import { Component } from '@angular/core';
import { DocDependencyInstallComponent } from '../../core/doc/doc-dependency-install/doc-dependency-install.component';
import { DocDescriptionComponent } from '../../core/doc/doc-description/doc-description.component';
import { DocExampleComponent } from '../../core/doc/doc-example/doc-example.component';
import { DocHeaderComponent } from '../../core/doc/doc-header/doc-header.component';
import { DocPageComponent } from '../../core/doc/doc-page/doc-page.component';
import { DocSourceComponent } from '../../core/doc/doc-source/doc-source.component';
import { DocSubHeaderComponent } from '../../core/doc/doc-sub-header/doc-sub-header.component';

@Component({
  selector: 'vn-button-page',
  standalone: true,
  imports: [
    DocHeaderComponent,
    DocSubHeaderComponent,
    DocDescriptionComponent,
    DocSourceComponent,
    DocExampleComponent,
    DocPageComponent,
  ],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.scss',
})
export class ButtonPageComponent {}
