import { useEffect, useRef } from "react";
import * as d3 from "d3";

const Activity = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Trier les données par kilogramme
    const sortedData = [...data].sort((a, b) => a.kilogram - b.kilogram);

    // Définir les dimensions du graphique
    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 50, left: 40 };

    // Supprimer l'ancien SVG s'il existe
    d3.select(chartRef.current).selectAll("*").remove();

    // Créer le SVG
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Échelles
    const xScale = d3.scaleBand()
      .domain(sortedData.map((_, i) => i + 1)) // 1,2,3...
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([d3.min(sortedData, d => d.kilogram) - 2, d3.max(sortedData, d => d.kilogram)])
      .range([height - margin.bottom, margin.top]);

    // Ajouter les barres des kilogrammes
    svg.selectAll(".bar-kilo")
      .data(sortedData)
      .enter()
      .append("rect")
      .attr("class", "bar-kilo")
      .attr("x", (_, i) => xScale(i + 1))
      .attr("y", d => yScale(d.kilogram))
      .attr("height", d => height - margin.bottom - yScale(d.kilogram))
      .attr("width", xScale.bandwidth() / 2)
      .attr("fill", "#4A90E2");

    // Ajouter les barres des calories
    svg.selectAll(".bar-calories")
      .data(sortedData)
      .enter()
      .append("rect")
      .attr("class", "bar-calories")
      .attr("x", (_, i) => xScale(i + 1) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.kilogram))
      .attr("height", d => height - margin.bottom - yScale(d.kilogram))
      .attr("width", xScale.bandwidth() / 2)
      .attr("fill", "#E24A4A");

    // Ajouter l'axe X
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickFormat(d => d));

    // Ajouter l'axe Y
    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

  }, [data]);

  return <div ref={chartRef}></div>;
};

export default Activity;
