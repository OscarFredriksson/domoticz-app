export namespace IAPI
{
    export interface AllSensors
    {
        result: Array<Sensor>
    }

    export interface Sensor
    {
        Name: string,
        Data: string,
        idx: string,
    }

    export interface SensorHistory
    {
        result: Array<{
            d: string,
            te: number
        }>
    }
}