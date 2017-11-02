import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lat: number = 36.0507595;
  lng: number = 129.2788512;
  constructor() {
    
   }

  ngOnInit() {
  }

}
