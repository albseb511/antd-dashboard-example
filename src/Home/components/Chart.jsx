import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov'],
  datasets: [
    {
      label: 'marks',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          display: false,
        },
        gridLines: {
            drawBorder: false,
            display: false,
          },
      },
    ],
    xAxes: [
        {
            gridLines: {
                display: false,
            }
        }
    ]
  },
}

const LineChart = () => (
  <>
    <Line height={300} width={500} data={data} options={options} />
  </>
)

export {LineChart}