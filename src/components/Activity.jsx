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
    const margin = { top: 20, right: 40, bottom: 50, left: 40 };

    // Supprimer l'ancien SVG s'il existe
    d3.select(chartRef.current).selectAll("*").remove();

    // Créer le SVG
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Échelle X
    const xScale = d3.scaleBand()
      .domain(sortedData.map((_, i) => i + 1))
      .range([margin.left, width - margin.right])
      .paddingInner(0.5); // Équilibre les espaces entre les barres

    // Échelle Y
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
      .attr("width", "7px") // Ajustement pour bien répartir les barres
      .attr("fill", "#282D30");

    // Ajouter les barres des calories
    svg.selectAll(".bar-calories")
      .data(sortedData)
      .enter()
      .append("rect")
      .attr("class", "bar-calories")
      .attr("x", (_, i) => xScale(i + 1) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.kilogram))
      .attr("height", d => height - margin.bottom - yScale(d.kilogram))
      .attr("width", "7px")
      .attr("fill", "#E60000");

    // Ajouter l'axe X
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickFormat(d => d))
      .call(d3.axisBottom(xScale).tickSize(0));

    // Personnalisation de l'axe X
    svg.selectAll(".tick text")
      .attr("x", "-8px")
      .attr("fill", "#9B9EAC")
      .attr("y", "20px")
      .style("font-size", "14px")

    svg.selectAll(".tick line").remove();
    svg.selectAll(".domain").attr("stroke", "#9B9EAC");
    svg.selectAll(".tick text")


    // Ajouter l'axe Y à droite
    svg.append("g")
      .attr("transform", `translate(${width - margin.right},0)`)
      .call(d3.axisRight(yScale).tickSize(0));

    // Personnalisation de l'axe Y
    svg.selectAll(".tick line").remove();
    svg.selectAll("g:nth-of-type(2) .domain").remove();
    svg.selectAll(".tick text")
      .attr("fill", "#9B9EAC")
      .style("font-size", "14px")
      .attr("x", "20px")


  }, [data]);

  return <div ref={chartRef}></div>;
};

export default Activity;
