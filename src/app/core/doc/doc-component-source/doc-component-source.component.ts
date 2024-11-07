import { Component, inject, input, signal } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { zip } from 'rxjs';
import { CodeComponent } from '../../code/code.component';

@Component({
  selector: 'vn-doc-component-source',
  standalone: true,
  imports: [CodeComponent],
  templateUrl: './doc-component-source.component.html',
  styleUrl: './doc-component-source.component.scss',
})
export class DocComponentSourceComponent {
  name = input.required<string>();
  component = signal<string>('');
  style = signal<string>('');
  html = signal<string>('');
  spec = signal<string>('');
  fileService = inject(FileService);

  getFile(extension: string) {
    return this.fileService.getFile(
      `blueprint/${this.name()}/${this.name()}.component.${extension}`
    );
  }

  ngOnInit(): void {
    const comp = this.getFile('ts');
    const style = this.getFile('scss');
    const html = this.getFile('html');
    const spec = this.getFile('spec.ts');

    zip([comp, style, html, spec]).subscribe((data) => {
      this.component.set(data[0]);
      this.style.set(data[1]);
      this.html.set(data[2]);
      this.spec.set(data[3]);
    });
  }
}
