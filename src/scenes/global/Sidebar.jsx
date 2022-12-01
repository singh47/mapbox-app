import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

import SearchBar from "../../components/SearchBar/SearchBar";
import BarSearch from "../../components/SearchBar/BarSearch";

import "react-pro-sidebar/dist/css/styles.css";

import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import axios from 'axios';
import {useEffect, componentDidMount} from 'react';
import BoxComponentx from "../../components/Box/DetailBox";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import store from "../../store";


import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [data, setData] = useState([]);
  const fetchdata = async () => {
      const res = await axios.get('https://gist.githubusercontent.com/singh47/2cbc829ef507c519f05b3267a71f23fd/raw/06e7698219138ad943bfa8b5e77e4a1d3e81bcbc/test_data.json');
      setData(res.data);
  };
  useEffect(() => { fetchdata(); }, []);
  console.log("api data",data);

  function sendData(e, data) {
    store.dispatch({type: 'long', long: data});
  }

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
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
              margin: "10px 0 20px 0",
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

                <Typography variant="h3" color={colors.grey[100]}>Farm Details</Typography>
                <IconButton onClick={() => setIsCollapsed(isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
            
          <MenuItem 
          // onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <SearchIcon /> : undefined}
          style={{
              margin: "10px 0 10px 0",
              color: colors.grey[100],
            }}>
          </MenuItem>
          
          {!isCollapsed &&(
          <Stack spacing={3} sx={{ width: "auto"}}>
            <Autocomplete
              ListboxProps={{style : {maxHeight: "100vh"} , overflow:"hidden"}}
              options={data}

              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  {option.farmerName}<br></br>
                  {option.policyID}<br></br>
                  {option.township}<br></br>
                </li>
              )}
              // renderOption={(props, option) => {
              //   const { title, color } = option;
              //   return (
              //     <span style={{ backgroundColor: 'red' }}>
              //       {title}
              //     </span>
              //   );
              // }}
              
              // options={data.map((option) => option.policyID)}
              getOptionLabel={(option) => (option.farmerName+"\n"+option.policyID+ "\n" + option.township)}
             // getOptionLabel = {(option) => <p key={option.farmerName}><b>{option.farmerName}</b><br></br>{option.policyID}<br></br>{option.township}</p>}
              onChange={(e, value) => {if(value!=null)sendData(e.target, value.geometry)}}
              renderInput={(params) => <TextField {...params}
              label="Search Policy ID.." />}
              open= "true"
            />  
          </Stack>
          )}

        </Menu>

      </ProSidebar>

    </Box>
  );
};


export default Sidebar;
