import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../css/Intensity.css';
const Intensity = ({ data, kind }) => {

  const kindMapping = kind; // Assurez-vous que `kind` est bien un objet

  // Transformation des données
  const formattedData = data.map(item => ({
    subject: kindMapping[item.kind], // Ajoute "Kinmapping" devant le libellé
    value: item.value,
  }));

  return (
    <div className="intensity-container" style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart width="100%" cx="50%" cy="50%" outerRadius="40%" data={formattedData} height="80%">
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#fff"
            tickLine={false}
            tick={({ payload, x, y, textAnchor }) => {
              // Exemple : Cibler uniquement le tick "strength"
              const isTarget = payload.value === "strength";
              return (
                <text
                  x={x}
                  y={isTarget ? y + 15 : y} // Décale uniquement "strength" vers le bas
                  textAnchor={textAnchor}
                  fontSize={12}
                  fill="#fff"
                >
                  {payload.value}
                </text>
              );
            }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={1}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Intensity;
