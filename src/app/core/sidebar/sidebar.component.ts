import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Group {
  name: string;
  links: Link[];
}

interface Link {
  name: string;
  path: string;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  routes = signal<Array<Group>>([
    {
      name: 'utils',
      links: [
        {
          name: 'modify',
          path: './modify',
        },
      ],
    },
  ]);
}
