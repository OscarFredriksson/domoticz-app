import { Component, OnInit } from '@angular/core';
import { DomoticzService, ISensor } from '../../services/domoticz.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  globalLoading = false;

  constructor(
    public domoticzService: DomoticzService
  ) 
  { }

  ngOnInit(): void {



    //this.refresh();

  }

  refresh()
  {
    this.domoticzService.refresh();
  }

}
