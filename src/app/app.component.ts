import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'QR';
  public qrInfo = 'https://codelaghien.club/covid19/';
  public width = 300;

  public change(event: any): void {
    console.log('event=', event.target.value);
    this.qrInfo = event.target.value;
  }
}
