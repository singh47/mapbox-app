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

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

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
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            
            {!isCollapsed && (
              <Box
                display="flex flex-col"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}></Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

            {/* <Box
              display="flex"
              backgroundColor={colors.primary[200]}
              borderRadius="3px"
            >
              <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
              <IconButton type="button" sx={{ px: 3 }}>
                <SearchIcon />
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
              </IconButton>
          </Box>  */}
            {/* <Box
              display="flex"
              backgroundColor={colors.primary[200]}
              borderRadius="3px"
            >
            
            <SearchBar placeHolder="Enter your Policy ID..." data={[]} />  
            </Box>        

          {!isCollapsed && (
            <Box mb="25px">
              
            </Box>
          )}  */}

          <BarSearch placeHolder="Search" data={[]} />  


        </Menu>

      </ProSidebar>

    </Box>
  );
};

export default Sidebar;
