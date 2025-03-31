import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import '../css/Score.css';

const Score = ({ data }) => {
    if (!data || typeof data.todayScore !== "number") {
        return <p>Aucune donnée disponible</p>;
    }

    // Format des données pour le PieChart
    const formattedData = [
        { name: "Score", value: data.todayScore * 100 }, // Convertit en pourcentage
        { name: "Reste", value: 100 - data.todayScore * 100 }, // Complément pour un cercle complet
    ];

    const COLORS = ["#FF0000", "#FBFBFB"]; // Rouge pour le score, gris pour le reste

    return (
        <div className="score-container">
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <circle cx="50%" cy="50%" r="80" fill="#FFF" />
                        <Pie
                            data={formattedData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={80}
                            startAngle={90}
                            endAngle={450} // Tourne le graphique pour que 0% commence en haut
                            dataKey="value"
                            stroke="none"
                            cornerRadius={10}
                        >
                            {formattedData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>

                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            <tspan x="50%" dy="-25" fontSize="26" fontWeight={700} fill="#282D30"> 
                                {data.todayScore * 100}%
                            </tspan>
                            <tspan x="50%" dy="35" fontSize="16" fontWeight={500} fill="#282D30">
                                de votre
                            </tspan>
                            <tspan x="50%" dy="30" fontSize="16" fontWeight={500} fill="#282D30">
                                objectif
                            </tspan>

                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Score;
