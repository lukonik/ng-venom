import { Component } from '@angular/core';
import { UIButtonComponent } from "../../blueprint/button/button.component";

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [UIButtonComponent],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
  works(){
    console.log("WOKRS")
  }
}
