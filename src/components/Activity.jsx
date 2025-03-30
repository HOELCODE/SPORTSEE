import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Activity = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Aucune donnée disponible</p>;
  }

  // Reformater les jours pour éviter les problèmes d'affichage
  const formattedData = data.map((item, index) => ({
    ...item,
    day: index + 1,
  }));

  return (
    <div style={{ width: 700, height: 300 }}>
      <BarChart
        width={700}
        height={300}
        data={formattedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="kilogram" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="calories" fill="#E60000" activeBar={<Rectangle fill="#E60000" stroke="purple" />} />
      </BarChart>
    </div>
  );
};

export default Activity;
