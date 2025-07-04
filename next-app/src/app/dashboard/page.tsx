import React from 'react'
import LineChart from './linechart'
function BarChart() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1>Bar Chart</h1>
            <p>This is a placeholder for the bar chart component.</p>
            {/* You can integrate a chart library here, like Chart.js or Recharts */}
            {/* Example: <BarChart data={data} /> */}
        </div>
    )
}

export default function page() {
  return (
    <div>
      <BarChart />
      <h1>Dashboard</h1>
      <LineChart />
    </div>
  )
}
