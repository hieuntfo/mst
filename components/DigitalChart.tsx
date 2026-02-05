import React, { useState, useEffect } from 'react';

const useCountUp = (endValue: number, duration = 1500) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setValue(Math.floor(progress * endValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [endValue, duration]);
    
    return value;
};

interface DataPoint {
    name: string;
    [key: string]: string | number;
}

interface ChartBarProps {
    value: number;
    maxValue: number;
    color: string;
    isAnimated: boolean;
}

// Fix: Explicitly type ChartBar as a React.FC (Functional Component).
// This ensures TypeScript correctly interprets it as a React component and handles
// special props like `key` correctly, resolving the type assignment error.
const ChartBar: React.FC<ChartBarProps> = ({ value, maxValue, color, isAnimated }) => {
    const height = (value / maxValue) * 100;
    const animatedValue = useCountUp(value);

    return (
        <div className="h-full w-full flex flex-col-reverse items-center group">
            <div
                className="w-3/4 rounded-t-md transition-all duration-1000 ease-out"
                style={{
                    height: isAnimated ? `${height}%` : '0%',
                    backgroundColor: color,
                    boxShadow: `0 0 4px ${color}, 0 0 8px ${color}80, 0 0 12px ${color}40`,
                }}
            ></div>
            <div className="text-white text-sm font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {animatedValue}
            </div>
        </div>
    );
}

interface DigitalChartProps {
    data: DataPoint[];
}

const DigitalChart = ({ data }: DigitalChartProps) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const keys = Object.keys(data[0]).filter(k => k !== 'name');
    const colors = ['#0ea5e9', '#CE1126'];

    const maxValue = Math.ceil(Math.max(...data.flatMap(d => keys.map(key => d[key] as number))) / 50) * 50;

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimated(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-80 bg-most-navy p-6 rounded-lg shadow-2xl border border-blue-900/50 flex flex-col font-sans relative overflow-hidden">
            <div className="absolute inset-0 p-6 z-0">
                <div className="h-full w-full border-l border-r border-blue-800/30">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className={`h-1/4 ${i !== 0 ? 'border-t border-blue-800/30' : ''}`}></div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 flex-grow flex justify-around items-end gap-x-4">
                {data.map((point) => (
                    <div key={point.name} className="h-full flex-1 flex flex-col-reverse items-center">
                        <div className="text-gray-400 text-xs mt-3 h-4">{point.name}</div>
                        <div className="flex-grow w-full flex items-end justify-center gap-x-2">
                             {keys.map((key, index) => (
                                <ChartBar
                                    key={key}
                                    value={point[key] as number}
                                    maxValue={maxValue}
                                    color={colors[index]}
                                    isAnimated={isAnimated}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex justify-center items-center gap-x-6 pt-4 mt-4">
                {keys.map((key, index) => (
                    <div key={key} className="flex items-center gap-x-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors[index], boxShadow: `0 0 5px ${colors[index]}` }}></div>
                        <span className="text-gray-300 text-sm">{key}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DigitalChart;