import React, { useRef, useEffect } from 'react';
import Chart, { ChartConfiguration, ChartOptions } from 'chart.js/auto';

const FrontendSkillsChart: React.FC = () => {
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
          labels: ['HTML/CSS/JS/TS', 'React', 'Vue', 'Svelte', 'Other'],
          datasets: [{
            label: 'Frontend Skills',
            data: [4, 4, 3, 4, 2],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
          }, {
            label: '',
            data: [0, 0, 0, 0, 0],
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }],
        },
        options: {
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
          responsive: true,
          maintainAspectRatio: false,
          scale: {
            ticks: {
              min: 0,
              stepSize: 1,
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

export default FrontendSkillsChart;
