import { Line, Doughnut } from 'react-chartjs-2';
import {} from 'chart.js';
import {
  Chart as ChartJs,
  Tooltip,
  Filler,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Legend,
  ArcElement,
} from 'chart.js';
import { headerBG, purple, purpleLight } from '../../constants/colors';
import { getLast7Days } from '../../lib/Features';

ChartJs.register(
  Tooltip,
  Filler,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  ArcElement
);

type ChartType = {
  value: number[];
  labels?: string[];
};

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value }: ChartType) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: value,
        label: 'Revenue',
        fill: true,
        backgroundColor: purpleLight,
        borderColor: purple,
      },
    ],
  };
  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  cutout: 120,
};

const DoughnutChart = ({ value }: ChartType) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: 'Total Chats vs Group Chats',
        fill: true,
        backgroundColor: [purpleLight, headerBG],
        hoverBackgroundColor: ['bisque', 'purple'],
        borderColor: [purple, headerBG],
        offset: 10,
      },
    ],
  };

  return (
    <Doughnut
      style={{ zIndex: 10 }}
      data={data}
      options={doughnutChartOptions}
    />
  );
};

export { LineChart, DoughnutChart };
