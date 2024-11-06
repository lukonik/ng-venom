import { Component, computed, input } from '@angular/core';
import { CodeComponent } from '../../code/code.component';

@Component({
  selector: 'app-doc-dependency-install',
  standalone: true,
  imports: [CodeComponent],
  templateUrl: './doc-dependency-install.component.html',
  styleUrl: './doc-dependency-install.component.scss',
})
export class DocDependencyInstallComponent {
  packageNames = input.required<string>();

  installCode = computed(() => {
    return `npm install ${this.packageNames()}`;
  });
}
