import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import GaugeChart from 'react-gauge-chart'
import { connect } from 'react-redux';
// import Button from '@mui/material/Button';

function BoxComponent(props) {
  const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)', 
  };


  return (
    <Stack  sx={{ position:'absolute', top:'4.4rem', right:'10px', zIndex:'10', width:'15%'}}>

<span style={{ backgroundColor: 'rgba(20, 27, 45, .7)'}}>
      <GaugeChart id="gauge-chart1" 
        nrOfLevels={420}
        arcsLength={[0.3, 0.5, 0.2]}
        colors={['#5BE12C', '#F5CD19', '#EA4228']}
        percent={props.data.hbuMax * 0.01}
        arcPadding={0.02}
        needleColor="#FFFFFF" 
      />
     <p style={{textAlign:"center"}}>HBU</p>
</span>
<span style={{ backgroundColor: 'rgba(20, 27, 45, .7)'}}>
     <GaugeChart id="gauge-chart4" 
      nrOfLevels={10} 
      arcsLength={[0.3, 0.5, 0.2]}
      cornerRadius={3} 
      percent={props.data.hbuTrigger * 0.01} 
      needleColor="#FFFFFF" 
    />
    <p style={{textAlign:"center"}}>GDD</p>
</span>
    </Stack>
  );
}

const mapStateToProps = (store) => {
  return {
    data: store,
  };
};

export default connect(mapStateToProps)(BoxComponent);