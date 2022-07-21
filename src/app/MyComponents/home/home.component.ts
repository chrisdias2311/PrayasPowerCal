import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  images = ['./assets/Background/Fuels0.jpg','../../assets/Background/Fuels1.jpg','../../assets/Background/Fuels2.jpg','../../assets/Background/Fuels3.jpg','../../assets/Background/Fuels4.jpg']

}
