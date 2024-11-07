import { Component, input } from '@angular/core';

@Component({
  selector: 'vn-doc-sub-header',
  standalone: true,
  imports: [],
  templateUrl: './doc-sub-header.component.html',
  styleUrl: './doc-sub-header.component.scss',
})
export class DocSubHeaderComponent {
  label = input.required<string>();
}
