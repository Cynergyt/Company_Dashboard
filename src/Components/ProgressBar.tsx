import React from 'react';

interface ProgressBarProps {
  value: number;
  maxValue: number;
  title?: string;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, maxValue, title, color }) => {
  const progress = (value / maxValue) * 100;
  const activeColor = color;
  const inactiveColor = '#d3d3d3';

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: activeColor,
          marginRight: '10px',
        }}
      />
      <div style={{ marginRight: '15px', width: '50px' }}>{title}</div>
      <div style={{ flex: 2, marginLeft: '50px' }}>
        <div
          style={{

            width: '100%',
            height: '5px',
            backgroundColor: inactiveColor,
            borderRadius: '4px',
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          <div
            style={{
              
              width: `${progress}%`,
              backgroundColor: activeColor,
            }}
          ></div>
          <div
            style={{
              flex: 1,
              backgroundColor: inactiveColor,
            }}
          ></div>
        </div>
      </div>
      <span style={{ marginLeft: '10px' }}>{Math.round(progress)}%</span>
    </div>
  );
};

export default ProgressBar;
