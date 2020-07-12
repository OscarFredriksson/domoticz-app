import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../constants/api.constants';

import cron, { CronJob } from "cron";
import { IAPI } from './api.interface';

export interface ISensor
{
  name: string,
  temp: number,
  id: number,
  minTemp?: number,
  maxTemp?: number,
  history: Array<ISensorDataLog>
}

export interface ISensorDataLog
{
  d: string, //date
  te: number   //temp
}

@Injectable({
  providedIn: 'root'
})
export class DomoticzService {

  public sensors: Array<ISensor> = [];

  private cronJob: CronJob

  constructor(
    private http: HttpClient
  ) 
  { 
    this.refresh();

    //this.cronJob = cron.job("*/1 * * * * *", this.refreshContentOnly);

    //this.cronJob.start();
  }

  public refresh() 
  {
    console.log("refresh!");

    this.getAllSensors((sensors: Array<ISensor>)=> 
    {
      this.sensors = sensors;

      this.sensors.forEach((sensor: ISensor, index: number) => 
      {
        this.getTemperatureHistory(sensor.id, (data: IAPI.SensorHistory) => 
        {
          sensor.history = data.result;

          //När forEach nått sista elementet, kolla min/max
          if(index === this.sensors.length - 1) this.setMinMax();
        });
      });

    });
  }

  private getAllSensors(callback: (sensors: Array<ISensor>) => void)
  {
    const url = API.ALL_TEMPS;

    this.http.post<IAPI.AllSensors>(url, null).subscribe((data: IAPI.AllSensors)=> {
      
      //console.log(data.result);

      let newSensorsArray = [];

      data.result.forEach((element: IAPI.Sensor) => {

        newSensorsArray.push({
          name: element.Name,
          temp: element.Data.split(" C")[0],
          id: element.idx
        });
      });

      //this.sensors = newSensorsArray;

      callback(newSensorsArray);

    });
  }

  private getTemperatureHistory(id: number, callback: (data: IAPI.SensorHistory) => void)
  {
    const range: "day" | "month" | "year" = "day";

    const url = API.TEMP_HISTORY + "&idx=" + id + "&range=" + range;

    this.http.post(url, null).subscribe(callback);
  }

  private setMinMax()
  {
    this.sensors.forEach((sensor: ISensor) => 
    {
      //console.log(sensor);

      let min: number = sensor.temp;
      let max: number = sensor.temp;


      if(sensor.history)
      {      
        sensor.history.forEach((datapoint: ISensorDataLog) => 
        {
          min = Math.min(min, datapoint.te);
          max = Math.max(max, datapoint.te);
        });
      }

      sensor.minTemp = min;
      sensor.maxTemp = max;
    });
  }

}
