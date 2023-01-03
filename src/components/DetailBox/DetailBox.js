// import * as React from "react";
// import { Stack } from "@mui/system";
// import GaugeChart from "react-gauge-chart";
// import { connect } from "react-redux";
// // import Box from '@mui/material/Box';
// // import Button from '@mui/material/Button';

// function BoxComponent(props) {
//   const styles = {
//     border: "1px solid rgba(0, 0, 0, 0.05)",
//   };

//   if (!props.data.hbuMax) {
//     <Stack
//       style={styles}
//       sx={{
//         position: "absolute",
//         top: "4.4rem",
//         right: "10px",
//         zIndex: "10",
//         width: "15%",
//       }}
//     ></Stack>;
//   } else {
//     return (
//       <Stack
//         sx={{
//           position: "absolute",
//           top: "4.4rem",
//           right: "10px",
//           zIndex: "10",
//           width: "15%",
//         }}
//       >
//         <span style={{ backgroundColor: "rgba(20, 27, 45, .7)" }}>
//           <GaugeChart
//             id="gauge-chart1"
//             nrOfLevels={420}
//             arcsLength={[0.3, 0.5, 0.2]}
//             colors={["#5BE12C", "#F5CD19", "#EA4228"]}
//             percent={props.data.hbuMax * 0.01}
//             arcPadding={0.02}
//             needleColor="#FFFFFF"
//           />
//           <p style={{ textAlign: "center" }}>HBU</p>
//         </span>
//         <span style={{ backgroundColor: "rgba(20, 27, 45, .7)" }}>
//           <GaugeChart
//             id="gauge-chart4"
//             nrOfLevels={10}
//             arcsLength={[0.3, 0.5, 0.2]}
//             cornerRadius={3}
//             percent={props.data.hbuTrigger * 0.01}
//             needleColor="#FFFFFF"
//           />
//           <p style={{ textAlign: "center" }}>GDD</p>
//         </span>
//       </Stack>
//     );
//   }
// }

// const mapStateToProps = (store) => {
//   return {
//     data: store,
//   };
// };

// export default connect(mapStateToProps)(BoxComponent);

// **************************************
// This is the updated / cleaned up code

/**
 * This component is responsible for the data visualization.
 * There are 2 gauge.
 * One gauge is to represent the GDD.
 * The other gauge is to represent the HBU.
 *
 * This component is passed in the App.js
 */

import * as React from "react";
import { Stack } from "@mui/system";
import GaugeChart from "react-gauge-chart";
import { connect } from "react-redux";

const BoxComponent = (props) => {
  const styles = {
    border: "1px solid rgba(0, 0, 0, 0.05)",
  };

  if (!props.data.hbuMax) {
    <Stack
      style={styles}
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: "10",
        width: "15%",
        display: "flex",
        flexDirection:{xs:"column", sm:"column"},
      }}
    ></Stack>;
  } else {
    return (
      <Stack
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: "10",
          width: "7rem",
          display: "flex",
          flexDirection:{xs:"column", sm:"column"},

        }}
      >
        <span style={{ backgroundColor: "rgba(20, 27, 45, .7)" }}>
          <GaugeChart
            id="gauge-chart1"
            nrOfLevels={420}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={["#5BE12C", "#F5CD19", "#EA4228"]}
            // percent={props.data.hbuTrigger * 0.01}
            formatTextValue={(d) => props.data.hbuTrigger}
            animate= {true}
            animDelay={500}
            animateDuration={3000}
            arcPadding={0.02}
            needleColor="#B71C1C"
          />
          <p style={{ textAlign: "center" }}>
            <strong>
              GDD <br />
            </strong>
            Effective Date: {props.data.effective}
            <br />
            Policy Effective Date: {props.data.policyEff}
          </p>
        </span>
        <span style={{ backgroundColor: "rgba(20, 27, 45, .7)" }}>
          <GaugeChart
            id="gauge-chart4"
            nrOfLevels={10}
            arcsLength={[0.3, 0.5, 0.2]}
            cornerRadius={3}
            // percent={props.data.hbuMax * 0.01}
            formatTextValue={(d) => `${props.data.hbuMax} °C`}
            needleColor="#B71C1C"
          />
          <p style={{ textAlign: "center" }}>
            <strong>HBU</strong>
            <br />
            Coverage Effective Date: {props.data.coverageEff}
          </p>
        </span>
      </Stack>
    );
  }
};

const mapStateToProps = (store) => {
  return {
    data: store,
  };
};

export default connect(mapStateToProps)(BoxComponent);
