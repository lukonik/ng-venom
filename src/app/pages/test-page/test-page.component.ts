import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page',
  standalone: true,
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
  works(){
    console.log("WOKRS")
  }
}
