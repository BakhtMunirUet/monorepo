import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuthenticate: boolean = false;

  title = 'portal';

  onAuthticateDone(value: boolean){
    this.isAuthenticate = value;
  }


}
