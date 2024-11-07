import { Component, signal } from '@angular/core';
import { DocHeaderComponent } from '../../core/doc/doc-header/doc-header.component';
import { DocSubHeaderComponent } from '../../core/doc/doc-sub-header/doc-sub-header.component';
import { DocDescriptionComponent } from '../../core/doc/doc-description/doc-description.component';
import { DocSourceComponent } from '../../core/doc/doc-source/doc-source.component';
import { DocExampleComponent } from '../../core/doc/doc-example/doc-example.component';
import { DocDependencyInstallComponent } from '../../core/doc/doc-dependency-install/doc-dependency-install.component';
import { DocPageComponent } from '../../core/doc/doc-page/doc-page.component';
@Component({
  selector: 'vn-modify-page',
  standalone: true,
  imports: [
    DocHeaderComponent,
    DocSubHeaderComponent,
    DocDescriptionComponent,
    DocSourceComponent,
    DocExampleComponent,
    DocDependencyInstallComponent,
    DocPageComponent,
  ],
  templateUrl: './modify-page.component.html',
  styleUrl: './modify-page.component.scss',
})
export class ModifyPageComponent {}
