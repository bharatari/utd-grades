import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

export default function Graph({ type, data, options }) {
  const ref = useRef();
  const chartInstanceRef = useRef();

  useEffect(() => {
    const ctx = ref.current.getContext('2d');

    chartInstanceRef.current = new Chart(ctx, {
      type: type,
      data: data,
      options: options
    });

    return () => {
      chartInstanceRef
        && chartInstanceRef.current
        && chartInstanceRef.current.destroy();
    };
  }, [data])

  console.log('rerender')
  return (
    <canvas ref={ref} />
  );
}
