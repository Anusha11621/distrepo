import { Component, OnInit, Output, } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {

  @Output() public sendData = new EventEmitter<string>();

  

  ngOnInit(): void {
    this.sendData.emit('child Data!')
  }

}
