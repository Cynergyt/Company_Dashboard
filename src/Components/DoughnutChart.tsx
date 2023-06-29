import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Title, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Title, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ['#0D75BC', '#F3723F'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    rotation: 180,
    cutout: '80%',
    radius: '60%',
    maintainAspectRatio: false,
    
   
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;