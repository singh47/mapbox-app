// import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
// import axios from 'axios';
// import {useEffect} from 'react';
// import store from "../../store";

// import { tokens } from "../../theme";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import { HomeOutlined } from "@mui/icons-material";
// import SearchIcon from "@mui/icons-material/Search";
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Autocomplete from '@mui/material/Autocomplete';

// // import {componentDidMount} from 'react';
// // import BarSearch from "../../components/SearchBar/BarSearch";
// // import SearchBar from "../../components/SearchBar/SearchBar";
// // import BoxComponentx from "../../components/Box/DetailBox";
// // import InputBase from "@mui/material/InputBase";

// const Sidebar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const [data, setData] = useState([]);
//   const fetchdata = async () => {
//       const res = await axios.get('https://gist.githubusercontent.com/singh47/2cbc829ef507c519f05b3267a71f23fd/raw/06e7698219138ad943bfa8b5e77e4a1d3e81bcbc/test_data.json');
//       setData(res.data);
//   };
//   useEffect(() => { fetchdata(); }, []);
//   console.log("api data",data);

//   function sendData(e, data) {
//     store.dispatch({type: 'long', long: data});
//     //store.dispatch({type: 'gauge', long: data});
//   }

//   return (
//     <Box
//       sx={{
//         "& .pro-sidebar-inner": {
//           background: `${colors.primary[400]} !important`,
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#868dfb !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#6870fa !important",
//         },
//       }}
//     >
//       <ProSidebar collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           {/* LOGO AND MENU ICON */}
//           <MenuItem
//             onClick={() => setIsCollapsed(isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               margin: "10px 0 20px 0",
//               color: colors.grey[100],
//             }}
//           >

//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
//                 <Typography variant="h3" color={colors.grey[100]}>Farm Details</Typography>
//                 <IconButton onClick={() => {window.location.reload()}}>
//                   <HomeOutlined />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>

//           <MenuItem
//           // onClick={() => setIsCollapsed(!isCollapsed)}
//           icon={isCollapsed ? <SearchIcon /> : undefined}
//           style={{
//               margin: "10px 0 10px 0",
//               color: colors.grey[100],
//             }}>
//           </MenuItem>

//           {!isCollapsed &&(
//           <Stack spacing={3} sx={{ width: "auto"}}>
//             <Autocomplete
//               ListboxProps={{style : {maxHeight: "100vh"} , overflow:"hidden"}}
//               options={data}

//               renderOption={(props, option, { selected }) => (
//                 <li {...props}>
//                   {option.farmerName}<br></br>
//                   {option.policyID}<br></br>
//                   {option.township}<br></br>
//                 </li>
//               )}
//               // renderOption={(props, option) => {
//               //   const { title, color } = option;
//               //   return (
//               //     <span style={{ backgroundColor: 'red' }}>
//               //       {title}
//               //     </span>
//               //   );
//               // }}

//               // options={data.map((option) => option.policyID)}
//               getOptionLabel={(option) => (option.farmerName+"\n"+option.policyID+ "\n" + option.township)}
//              // getOptionLabel = {(option) => <p key={option.farmerName}><b>{option.farmerName}</b><br></br>{option.policyID}<br></br>{option.township}</p>}
//               onChange={(e, value) => {if(value!=null)sendData(e.target, value)}}
//               renderInput={(params) => <TextField {...params}
//               label="Search Policy ID.." />}
//               open= "true"
//             />
//           </Stack>
//           )}

//         </Menu>

//       </ProSidebar>

//     </Box>
//   );
// };

// export default Sidebar;

/**
 * This component is where the search functionality lives.
 * The Search functionality will search the customer by either
 * one of the these parameters - farmName, policyID, township.
 *
 * The Search functionality fetch data from the API that was created
 * using Github secret gist. The data API is private and not searchable
 * for public use.
 *
 * The data schema / format was created from the cleaned data provided
 * by Ruhid M. - Data Scientist. The data schema is a mixed of .json
 * and .geojson.
 *
 * Click the Corteva logo and it will reset the map box to initial state
 * which is set to Saskatchewan Canada as center.
 */

// **************************************
// This is the updated / cleaned up code

import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import axios from 'axios';
import { useEffect } from 'react';
import store from '../../store';
import { tokens } from '../../theme';
import { Box, useTheme } from '@mui/material';
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import { HomeOutlined } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { CORTEVA_DATA_API } from '../../utils/constants';

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const res = await axios.get(CORTEVA_DATA_API);
    setData(res.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  console.log('api data', data); // Debugging purposes

  const sendData = (e, data) => {
    store.dispatch({ type: 'long', long: data });
  };

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                {/* <Typography variant="h3" color={colors.grey[100]}>
                   Farm Details
                 </Typography> */}
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100%"
                    height="100px"
                    src={`../../assets/corteva.png`}
                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                    onClick={() => {
                      window.location.reload();
                    }}
                  />
                </Box>
                {/* <IconButton
                   onClick={() => {
                     window.location.reload();
                   }}
                 > */}
                {/* <HomeOutlined />
                 </IconButton> */}
              </Box>
            )}
          </MenuItem>

          <MenuItem
            icon={isCollapsed ? <SearchIcon /> : undefined}
            style={{
              margin: '1px 0 0 0',
              color: colors.grey[100],
            }}
          ></MenuItem>

          {!isCollapsed && (
            <Stack spacing={3} sx={{ width: 'auto' }}>
              <Autocomplete
                // sx={{ backgroundColor: "red" }}
                ListboxProps={{
                  style: { maxHeight: '82vh' },
                  overflow: 'hidden',
                }}
                options={data}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    {option.farmerName}
                    <br></br>
                    {option.policyID}
                    <br></br>
                    {option.township}
                    <br></br>
                  </li>
                )}
                getOptionLabel={(option) =>
                  option.farmerName +
                  ' - ' +
                  option.township +
                  ' - ' +
                  option.policyID
                }
                // getOptionLabel = {(option) => <p key={option.farmerName}><b>{option.farmerName}</b><br></br>{option.policyID}<br></br>{option.township}</p>}
                onChange={(e, value) => {
                  if (value != null) sendData(e.target, value);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Search Customer..." />
                )}
                open="true"
              />
            </Stack>
          )}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
