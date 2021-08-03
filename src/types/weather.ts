type LocationType = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  locationtime_epoch: number;
  locationtime: string;
};

type CurrentType = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  }
};

type ForecastdayType = {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
  }
};

export type ForecastType = {
  forecastday: ForecastdayType[];
};

export interface Weather {
  location?: LocationType;
  current?: CurrentType;
  forecast?: ForecastType;
}
