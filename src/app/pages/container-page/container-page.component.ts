import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';

@Component({
  selector: 'app-container-page',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './container-page.component.html',
  styleUrl: './container-page.component.scss',
})
export class ContainerPageComponent {}
