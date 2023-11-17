import React, { useRef, useEffect } from 'react';
import Chart, { ChartConfiguration, ChartOptions } from 'chart.js/auto';

const FullStackSkillsChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');

    if (ctx) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['TypeScript', 'Go', 'Kotlin', 'PHP', 'Ruby', 'Python'],
          datasets: [
            {
              label: 'Backend Skills',
              data: [4, 4, 3, 3, 4, 2],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(54, 162, 235, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            },
            {
              label: ' ',
              data: [0, 0, 0, 0, 0, 0],
              backgroundColor: 'transparent',
              borderColor: 'transparent',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scale: {
            ticks: {
              min: 0,
              max: 5,
              stepSize: 1,
            },
            angleLines: {
              display: false,
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                color: '#333',
                boxWidth: 12,
                padding: 16,
                usePointStyle: true,
              },
            },
          },
        } as ChartOptions,
      } as ChartConfiguration);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={canvasRef} width="400" height="400" />;
};

export default FullStackSkillsChart;
