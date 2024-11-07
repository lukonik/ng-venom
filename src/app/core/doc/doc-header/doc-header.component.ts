import { Component, input } from '@angular/core';

@Component({
  selector: 'vn-doc-header',
  standalone: true,
  imports: [],
  templateUrl: './doc-header.component.html',
  styleUrl: './doc-header.component.scss',
})
export class DocHeaderComponent {
  label = input.required<string>();
}
