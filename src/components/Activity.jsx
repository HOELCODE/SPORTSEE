import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Activity = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Aucune donnée disponible</p>;
  }

  // Reformater les jours pour éviter les problèmes d'affichage
  const formattedData = data.map((item, index) => ({
    ...item,
    day: index + 1,
    kilogramAxe: item.kilogram,
    CaloriesAxe: item.calories,
    kilogramBarre: item.kilogram / 5,
    caloriesBarre: item.calories / 8,
  }));


  // Affichage du graphique
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={700}
          height={250}
          data={formattedData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} dy={15} />
          <YAxis
            dataKey="kilogramAxe"
            orientation="right"
            tickLine={false}
            axisLine={false}
            dx={15}
            domain={[0, 'dataMax']}
            tickCount={4}
          />
          <Tooltip
            formatter={(value, name) => {
              if (name === "kilogramBarre") return [<span style={{ color: '#fff' }}>{value * 5}kg</span>];
              if (name === "caloriesBarre") return [<span style={{ color: '#fff' }}>{value * 8}kcal</span>];
              return value;
            }}
            labelFormatter={() => ""} // Supprime l'affichage des jours
            contentStyle={{ backgroundColor: '#E60000', color: '#fff' }} // Style du tooltip
          />
          <Bar dataKey="kilogramBarre" fill="#282D30" radius={[3, 3, 0, 0]} activeBar={<Rectangle dataKey="kilogramAxe" fill="#282D30" stroke="#C4C4C480" />} />
          <Bar dataKey="caloriesBarre" fill="#E60000" radius={[3, 3, 0, 0]} activeBar={<Rectangle datakey="CaloriesAxe" fill="#E60000" stroke="#C4C4C480" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>

  );
};

export default Activity;
