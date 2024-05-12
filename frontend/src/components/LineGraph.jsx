import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function LineGraph({ suicidesData }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Total Suicides',
        font: {
          size: 18
        }
      }
    }
  }

  const labels = suicidesData.map(obj => obj.year)
  const data = suicidesData.map(obj => +obj.total_suicides)

  const dataset = {
    labels,
    datasets: [{
      label: 'Total Suicides',
      data,
      fill: false,
      borderColor: '#204B57',
      backgroundColor: ['#A9D4E2', '#F89236', '#F1F1E6'],
      pointRadius: 7

    }]
  }

  return (
    <Line options={options} data={dataset} className='mx-auto w-[100%]' />
  )
}
