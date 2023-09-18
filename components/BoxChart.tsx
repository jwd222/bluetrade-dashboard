'use client'
import React, { Component } from 'react'
// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts'
import { generateArray } from '@/lib/utils'
import { useTheme } from '@/context/theme-context'

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const BoxChart = () => {
  const { theme } = useTheme()
  const options = {
    theme: 'dark1',
    animationEnabled: true,
    data: [
      {
        type: 'boxAndWhisker',
        yValueFormatString: '$####.00',
        dataPoints: [
          { label: 'July 18', y: [179, 256, 300, 418, 274] },
          { label: 'July 19', y: [252, 346, 409, 437, 374.5] },
          { label: 'July 20', y: [236, 281.5, 336.5, 428, 313] },
          { label: 'July 21', y: [340, 382, 430, 452, 417] },
          { label: 'July 22', y: [194, 224.5, 342, 384, 251] },
          { label: 'July 23', y: [241, 255, 276.5, 294, 274.5] },
        ],
      },
    ],
  }

  return (
    <div className="scale-75">
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  )
}
export default BoxChart
