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
    <div className="duration-container">
      <h2>Durée moyenne des <br /> sessions</h2>
      <div
        style={{
          backgroundColor: "#FF0000",
          borderRadius: "5px",
          width: "100%",  // Permet d'occuper toute la largeur disponible
          // Évite que le graphique soit trop large
          height: "250px", // Assure une hauteur fixe
        }}
      >
        <ResponsiveContainer width="100%" height={270}>
          <LineChart
            data={formattedData}
            margin={{
              top: 70,
              right: 5,
              left: 5,
              bottom: 40,
            }}
          >
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              stroke="#FFF"
              tick={({ payload, x, y, textAnchor }) => {
                const isL = payload.value === "L";
                const isD = payload.value === "D";

                return (
                  <text
                    x={isL ? x + 5 : isD ? x - 5 : x} // "L" +10px, "D" +5px
                    y={y}
                    textAnchor={textAnchor}
                    fontSize={12}
                    fill="#fff"
                  >
                    <tspan x={isL ? x + 5 : isD ? x - 5 : x} dy="0.71em">{payload.value}</tspan>
                  </text>
                );
              }}
              interval={0}
            />

            <Tooltip
              formatter={(value) => [<span style={{ color: "#000" }}>{value} min</span>]}
              labelFormatter={() => ""}
              contentStyle={{ backgroundColor: "#fff" }}
              cursor={{ stroke: "none" }}
              wrapperStyle={{ outline: "none" }}
              position={{ y: 20 }}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFF"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

};

export default Duration;