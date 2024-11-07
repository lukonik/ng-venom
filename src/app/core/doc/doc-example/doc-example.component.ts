import { Component, inject, input, signal } from '@angular/core';
import { CodeComponent } from '../../code/code.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'vn-doc-example',
  standalone: true,
  imports: [CodeComponent],
  templateUrl: './doc-example.component.html',
  styleUrl: './doc-example.component.scss',
})
export class DocExampleComponent {
  language = input.required<string>();
  path = input.required<string>();
  http = inject(HttpClient);
  code = signal<string>('');

  private getFile() {
    return this.http.get(`blueprint-examples/${this.path()}`, {
      responseType: 'text',
    });
  }

  ngOnInit(): void {
    const code = this.getFile();

    code.subscribe((data) => {
      this.code.set(data);
    });
  }
}
