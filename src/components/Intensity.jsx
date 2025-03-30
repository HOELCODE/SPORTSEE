import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Intensity = ({ data }) => {
    const kindMapping = {
      1: 'Cardio',
      2: 'Énergie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité'
    };
  
    // Transformation des données
    const formattedData = data.map(item => ({
      subject: kindMapping[item.kind], // Remplace `kind` par le bon libellé
      value: item.value, // Garde la valeur
    }));
  
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke="white" tick={{ fontSize: 12 }} />
          <PolarRadiusAxis tick={false} />
          <Radar 
            name="Performance" 
            dataKey="value" 
            stroke="#FF0101" 
            fill="#FF0101" 
            fillOpacity={0.6} 
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  };
  
  export default Intensity;
  
