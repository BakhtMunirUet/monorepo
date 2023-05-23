import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  /**
   * Once the user authtication is done from the API 
   * An event will be emit
   */
  @Output() onAuthProcessDone = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }


  onAuthClick(){
    /**
     * here will be the process of authetication
     */
    this.onAuthProcessDone.emit(true);
  }

}
