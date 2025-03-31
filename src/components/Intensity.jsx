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
    <div className='intensity-container'>
    <ResponsiveContainer width={350} height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis dataKey="subject" stroke="#fff" tick={{ fontSize: 12 }} tickLine={false} />
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
