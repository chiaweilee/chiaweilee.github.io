// https://dev.qweather.com/docs/api/astronomy/sunrise-sunset/
// https://dev.qweather.com/docs/api/astronomy/moon-and-moon-phase/
// https://dev.qweather.com/docs/api/grid-weather/grid-weather-hourly-forecast/

import React from 'react';
import { Chart } from '@antv/g2';

interface State {
  sunrise?: any;
  sunset?: any;
  moonrise?: any;
  moonset?: any;
  weather?: {
    [hour: number]: string;
  };
}

const container = 'c1';
const key = '23167bc16e6f48d7a2d76a5ddf39a656';

export default class extends React.PureComponent<any, State> {
  public state = {
    location: '116.41,39.92',
    date: '20200531',
    sunrise: 6,
    sunset: 18,
    moonrise: 3,
    moonset: 15,
    weather: [],
  };

  public componentDidMount(): void {
    this.fetch().finally(this.init);
  }

  public render() {
    return <div id={container} />;
  }

  private get data() {
    const { sunrise, sunset, moonrise, moonset, weather } = this.state;
    const hours: number[] = Array.from(new Array(24)).map((_, h) => h);
    return [
      ...hours.map((h) => ({
        category: 'sun',
        time: h.toString(),
        value: h < sunrise || h > sunset ? 1 : 0,
      })),
      ...hours.map((h) => ({
        category: 'moon',
        time: h.toString(),
        value: h < moonrise || h > moonset ? 1 : 0,
      })),
      ...hours.map((h) => ({
        category: 'rain',
        time: h.toString(),
        value: weather[h] === '晴' ? 1 : 0,
      })),
    ];
  }

  private init = () => {
    const { offsetWidth } = document.getElementById(container);
    const chart = new Chart({
      container,
      width: offsetWidth,
      height: offsetWidth,
    });

    chart.source(this.data);

    chart.tooltip({
      showTitle: null,
    });

    chart.coord('polar', {
      innerRadius: 0.2,
    });

    chart.legend(false);

    chart.axis('time', {
      line: null,
      tickLine: null,
      grid: null,
      label: {
        offset: 3,
      },
    });

    chart
      .polygon()
      .position('time*category')
      .color('value', '#BAE7FF-#1890FF-#0050B3')
      .tooltip('category*time*value')
      .style({
        stroke: '#fff',
        lineWidth: 1,
      });

    chart.render();
  };

  private fetch() {
    const { location } = this.state;
    return Promise.all([
      fetch(`https://devapi.qweather.com/v7/weather/24h?key=${key}&location=${location}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            weather: res.hourly,
          });
        }),
    ]);
  }
}
