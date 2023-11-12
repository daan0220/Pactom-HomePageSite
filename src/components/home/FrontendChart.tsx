import React, { useRef, useEffect } from 'react';
import Chart, { ChartConfiguration, ChartOptions } from 'chart.js/auto';

const FrontendSkillsChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');

    if (ctx) {
      // チャートが既に存在していれば破棄
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // 新しいチャートを作成
      chartRef.current = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['HTML/CSS/JavaScript', 'React', 'Vue', 'Svelte', 'Other'],
          datasets: [{
            label: 'Frontend Skills',
            data: [4, 4, 3, 3, 1], // 各スキルの割合（仮のデータ、1から4までの4段階）
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
          }],
        },
        options: {
          // グラフのオプションを設定（必要に応じて追加）
          responsive: true,
          maintainAspectRatio: false,
          scale: {
            angleLines: {
              display: false,
            },
            ticks: {
              min: 0,
              max: 4, // 4段階のスケールに変更
              stepSize: 1, // ステップサイズを1に設定
            },
          },
        } as ChartOptions,
      } as ChartConfiguration);
    }

    // アンマウント時にチャートを破棄
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // 最初のレンダリング時にのみ実行

  return <canvas ref={canvasRef} width="400" height="400" />;
};

export default FrontendSkillsChart;
