import * as React from "react"
import { DemoChartData } from "./demo-chart-data"
import Highcharts from "highcharts/highstock"
import HighchartsReact from "highcharts-react-official"

interface Props {

}

const options = {
  chart: {
    type: "spline",
    height: 396
  },
  title: {
    text: "Twitch Viewers vs In-Game Patterns"
  },
  series: [
    {
      id: "main",
      name: "Viewers Count",
      data: DemoChartData,
      color: "#6441a5",
      dataGrouping: {
        approximation: "average",
        enabled: true,
        forced: true,
        units: [
          ["week", [2]]
        ]
      },
      tooltip: {
        valueDecimals: 0
      }
    }
  ],
  xAxis: {
    plotLines: [
      {
        value: 1664813306000,
        label: {
          text: "Playing Kassadin"
        },
        zIndex: 2
      },
      {
        value: 1676868395000,
        label: {
          text: "Playing Kalista"
        },
        zIndex: 2
      },
      {
        value: 1681078521000,
        label: {
          text: "Playing Kled"
        },
        zIndex: 2
      },
      {
        value: 1694399140000,
        label: {
          text: "Playing Kassadin"
        },
        zIndex: 2
      }
    ],
    plotBands: [{
      from: 1644834266000,
      to: 1648620023000,
      color: "#dedede",
      label: {
        text: "LP Loose Streak"
      }
      // zIndex: -3
    }]
  },
  rangeSelector: {
    buttonTheme: { // styles for the buttons
      fill: "none",
      stroke: "none",
      "stroke-width": 0,
      r: 8,
      style: {
        color: "rgb(51, 51, 51)",
        fontWeight: "bold"
      },
      states: {
        hover: {},
        select: {
          fill: "rgb(51, 51, 51)",
          style: {
            color: "white"
          }
        }
      }
    },
    inputBoxBorderColor: "gray",
    inputBoxWidth: 120,
    inputBoxHeight: 18,
    inputStyle: {
      color: "rgb(51, 51, 51)",
      fontWeight: "bold"
    },
    labelStyle: {
      color: "silver",
      fontWeight: "bold"
    }
  },
  navigator: {
    series: {
      type: "bar",
      dataGrouping: {
        approximation: "average",
        enabled: true,
        forced: true,
        units: [
          ["month", [1]]
        ]
      }
    }
  }
}

export const DemoChart: React.FC<Props> = () => {
  return <HighchartsReact constructorType="stockChart" highcharts={Highcharts} options={options} />
}