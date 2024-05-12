import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { getRandomColor } from '../services/api'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function BarGraph({ suicidesData }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Total Suicides by Year'
      }
    }
  }

  const labels = suicidesData.map(obj => obj.year)
  const data = suicidesData.map(obj => +obj.total_suicides)
  console.log(suicidesData, labels)
  const dataset = {
    labels,
    datasets: [{
      label: 'Total Suicides',
      data,
      fill: false,
      backgroundColor: data.map(() => getRandomColor()),
      borderColor: 'rgb(75, 192, 192)',
      inflateAmount: 'auto'
    }]
  }

  return (
    <Bar options={options} data={dataset} className='mx-auto w-[100%]' />
  )
}
