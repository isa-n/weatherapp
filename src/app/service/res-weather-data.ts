export class ThreeHoursData {
    city:{
        coord:{
            lat : number,
            lon : number
        }
        country : string,
        id : number,
        name : string,
        population : number,
        sunrise: number,
        sunset: number,
        timezone: number
    };
    cnt : number;
    cod : string;
    list:{
        dt:number,
        dt_txt:string,

        main:{
            grnd_level:number,
            humidity:number,
            pressure:number,
            sea_level:number,
            temp:number,
            temp_kf:number,
            temp_max:number,
            temp_min:number
        };

        weather:{
            id:number,
            main:string,
            description:string,
            icon:string
        }[];

        wind:{
            deg:number,
            speed:number
        };
        clouds:{
            all:number
        };
        sys:{
            pod:string
        };
    }[];
    message:number;
}

export class NowData {
    base: string;
    clouds: {all: number};
    cod: number;
    coord: {lon: number, lat: number}
    dt: number;
    id: number;
    main: {temp: number, pressure: number, humidity: number, temp_min: number, temp_max: number}
    name: string;
    sys: {type: number, id: number, message: number, country: string, sunrise: number, __proto__: Object}
    timezone: number;
    visibility: number;
    weather: {id: number, main: string, description: string, icon: string}[] ;
    wind: {speed: number, deg: number};
    __proto__: Object;
}