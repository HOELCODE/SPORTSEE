import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../css/Duration.css';

const Duration = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Aucune donnée disponible</p>;
  }

  //  réer le tableau Lundi Mardi ...
  const daysLabels = ["L", "M", "M", "J", "V", "S", "D"];

  // Reformater les jours pour avoir des labels corrects
  const formattedData = data.map((item, index) => ({
    ...item,
    day: daysLabels[index], // Assigner L, M, M, J, V, S, D
  }));

  return (
    <div className='duration-container'>
      <h2>Durée moyenne des <br /> sessions</h2>
      <div
        style={{
          backgroundColor: '#FF0000',
          borderRadius: '5px',
          marginTop: '30px'
        }}
        width="300px"
      >
        <LineChart
          width={300} // Augmenter la largeur
          height={200}
          data={formattedData}
          margin={{
            top: 0,
            right: 5, // Ajout d'une marge à droite
            left: 5,  // Ajout d'une marge à gauche
            bottom: 30, // Plus de marge en bas pour éviter le chevauchement
          }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="#FFF"
            tick={{ transform: "translate(0, 10)" }}
            interval={0} // Force l'affichage de tous les ticks
          />
          <Tooltip
            formatter={(value) => [<span style={{ color: '#000' }}>{value} min</span>]} // Formatte la valeur
            labelFormatter={() => ""} // Supprime l'affichage du jour
            contentStyle={{ backgroundColor: '#fff' }} // Style du tooltip
            cursor={{ stroke: "none" }} // Supprime la barre verticale
            wrapperStyle={{ outline: "none" }} // Supprime les bordures du tooltip
            position={{ y: 0 }} // Fixe la position du tooltip
          />

          <Line type="monotone" dataKey="sessionLength" stroke="#FFF" dot={false} strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  );

};

export default Duration;