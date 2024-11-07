import { Component, inject, input, signal } from '@angular/core';
import { CodeComponent } from '../../code/code.component';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../../../services/file.service';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { UiButtonComponent } from '../../ui/ui-button/ui-button.component';

@Component({
  selector: 'vn-doc-source',
  standalone: true,
  imports: [CodeComponent, ClipboardModule,UiButtonComponent],
  templateUrl: './doc-source.component.html',
  styleUrl: './doc-source.component.scss',
})
export class DocSourceComponent {
  code = signal<string>('');
  language = input.required<string>();
  http = inject(HttpClient);
  path = input.required<string>();
  fileService = inject(FileService);
  name = input.required<string>();
  extension = input.required<string>();

  private getFile() {
    return this.http.get(`blueprint/${this.path()}`, {
      responseType: 'text',
    });
  }

  ngOnInit(): void {
    const code = this.getFile();

    code.subscribe((data) => {
      this.code.set(data);
    });
  }

  download() {
    this.fileService.downloadFile(this.name(), {
      name: `${this.name()}.${this.extension()}`,
      content: this.code(),
    });
  }
}
