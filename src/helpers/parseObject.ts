const parseObject = (...obj: any) => {
  const weatherArray = obj;
  console.log(weatherArray);
  const currentWeather = new Map<string, any>();
  const futureWeather = new Map<string, any>();
  Object.entries(weatherArray[0])
    .forEach(([key, value]) => {
      if (key === 'temp_c') {
        currentWeather.set(key, value);
      }
    });
  console.log(currentWeather);
  const { forecastday } = weatherArray[1];
  console.log(forecastday.map((item: any) => item.day));
  weatherArray[1].forecastday.forEach((item: any) => {
    futureWeather.set(item.day.avgtemp_c, 'f');
  });
  console.log(futureWeather);
};

export default parseObject;
