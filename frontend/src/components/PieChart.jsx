import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { getRandomColor } from '../services/api'

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
)

export default function PieChart({ suicidesData }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
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
      backgroundColor: data.map(() => getRandomColor()),
      borderColor: 'rgb(75, 192, 192)',
      hoverOffset: 10
    }]
  }

  return (
    <Pie options={options} data={dataset} className='mx-auto w-[100%]' />
  )
}
