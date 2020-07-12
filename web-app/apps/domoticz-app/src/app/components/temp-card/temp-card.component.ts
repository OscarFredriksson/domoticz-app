import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-card',
  templateUrl: './temp-card.component.html',
  styleUrls: ['./temp-card.component.scss']
})
export class TempCardComponent implements OnInit {

  @Input() name: string;
  @Input() temp: string;
  @Input() minTemp: string;
  @Input() maxTemp: string;
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
