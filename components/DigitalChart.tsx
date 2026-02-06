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
                }}
            ></div>
            <div className="text-white text-sm font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-8 bg-most-navy px-2 py-1 rounded">
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
        <div className="w-full h-80 bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col font-sans relative overflow-hidden">
            <div className="absolute inset-0 p-6 z-0">
                <div className="h-full w-full border-l border-r border-gray-200">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className={`h-1/4 ${i !== 0 ? 'border-t border-gray-200' : ''}`}></div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 flex-grow flex justify-around items-end gap-x-4">
                {data.map((point) => (
                    <div key={point.name} className="h-full flex-1 flex flex-col-reverse items-center">
                        <div className="text-gray-500 text-xs mt-3 h-4">{point.name}</div>
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
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors[index] }}></div>
                        <span className="text-gray-600 text-sm">{key}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DigitalChart;