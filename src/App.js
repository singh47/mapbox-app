import ScatterPlot from "./components/ScatterPlot/ScatterPlot";
// import BarChart from "./components/BarChart/BarChart";
import SearchBar from "./components/SearchBar/SearchBar";
import "./index.css";
import CortevaData from "./components/SearchBar/Data";

//const App = () => <ScatterPlot />;

//const App = () => <BarChart />;

const App = () => {
  return (
    <div className="App">
      <SearchBar placeHolder="Enter your Policy ID..." data={CortevaData} />
    </div>
  );
};
export default App;

// import { scaleBand, scaleLinear, max } from "d3";
// import { useData } from "./components/BarChart/useData";
// import { AxisBottom } from "./components/BarChart/AxisBottom";
// import { AxisLeft } from "./components/BarChart/AxisLeft";
// import { Marks } from "./components/BarChart/Marks";

// const height = 960;
// const width = 500;
// const margin = {
//   top: 20,
//   right: 30,
//   bottom: 60,
//   left: 220,
// };
// const xAxisLabelOffSet = 55;

// const innerHeight = height - margin.top - margin.bottom;
// const innerWidth = width - margin.left - margin.right;

// const yValue = (d) => d.FarmerName;
// const xValue = (d) => d.HbuMax;

// const App = () => {
//   const data = useData();

//   if (!data) {
//     return <pre>Loading...</pre>;
//   }

//   // console.log(data[0]);

//   const yScale = scaleBand()
//     .domain(data.map(yValue))
//     .range([0, innerHeight])
//     .paddingInner(0.2);

//   const xScale = scaleLinear()
//     .domain([0, max(data, xValue)])
//     .range([0, innerWidth]);

//   // console.log(xScale.ticks());

//   return (
//     <svg width={width} height={height}>
//       <g transform={`translate(${margin.left}, ${margin.top})`}>
//         <AxisBottom xScale={xScale} innerHeight={innerHeight} />
//         <AxisLeft yScale={yScale} />
//         <text
//           className="axis-label"
//           x={innerWidth / 2}
//           y={innerHeight + xAxisLabelOffSet}
//           textAnchor="middle"
//         >
//           HBU MAX
//         </text>
//         <Marks
//           data={data}
//           yScale={yScale}
//           xScale={xScale}
//           xValue={xValue}
//           yValue={yValue}
//         />
//       </g>
//     </svg>
//   );
// };

// export default App;
