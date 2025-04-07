import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

interface SkillsRadarChartProps {
  skills: {
    name: string;
    value: number;
    fullMark: number;
  }[];
  className?: string;
}

export default function SkillsRadarChart({ skills, className = '' }: SkillsRadarChartProps) {
  const [isLightTheme, setIsLightTheme] = React.useState(false);
  
  React.useEffect(() => {
    // Check theme
    setIsLightTheme(document.documentElement.classList.contains('theme-light'));
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsLightTheme(document.documentElement.classList.contains('theme-light'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-2 rounded-lg shadow-lg ${isLightTheme ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
          <p className="font-medium">{`${payload[0].payload.name}`}</p>
          <p>{`Proficiency: ${payload[0].value}/100`}</p>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <div className={`w-full h-[400px] ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
          <PolarGrid 
            stroke={isLightTheme ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"} 
            strokeDasharray="3 3" 
          />
          <PolarAngleAxis 
            dataKey="name" 
            tick={{ 
              fill: isLightTheme ? "#374151" : "#e5e7eb", 
              fontSize: 12
            }} 
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            tick={false} 
            axisLine={false} 
            tickCount={5} 
          />
          <Tooltip content={<CustomTooltip />} />
          <Radar 
            name="Skills" 
            dataKey="value" 
            stroke="var(--color-primary-500)" 
            fill="var(--color-primary-500)" 
            fillOpacity={0.3} 
            animationDuration={1000}
            animationEasing="ease-out"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}