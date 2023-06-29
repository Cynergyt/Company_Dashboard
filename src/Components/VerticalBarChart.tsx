import React from 'react';
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);

const VerticalBarChart: React.FC = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Job Applied',
        data: [55, 65, 65, 65, 65, 65, 65],
        backgroundColor: '#0D75BC',
        barThickness: 5,
        borderWidth: 0
        
      
      },
      {
        label: 'Job View',
        data: [75, 80, 80, 80, 80, 80, 80],
        backgroundColor: '#F3723F',
        barThickness: 5,
        borderWidth: 0
        
        
      },
    ],
  };

  const bar_options = {
    maintainAspectRatio: false,
    indexAxis: 'x',
    scales: {
      x: {
        grid: {
          display: false
        },
      },
      y:{
        
        
        max: 100
      },
      
      
    },

    plugins: {
      legend: {
        align: 'end',
        display: true,
      },
      
    },
  };

  

  return (
    <div>
   
      <Bar data={data} options={bar_options} />
    </div>
  );
};

export default VerticalBarChart