import React, { useState } from "react";
import "./SearchBar.css";
// import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios';
import store from "../../store";

import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";


import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const BarSearch = ({placeHolder, data1}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

    console.log("sTATAT");
    console.log(store.getState());
    
  
    const [filteredData, setFilteredData] = useState([]);
    const [enteredData, setEnteredData] = useState([]);
    const [data, setData] = useState([]);
  
    const handleFilter = (event) => {
      const searchPolicyId = event.target.value;
      setEnteredData(searchPolicyId);
  
      //loaded data from API
  
      axios.get('https://gist.githubusercontent.com/enukeWebDev/0eebd793aef17f5b22d9334c9a2752a2/raw/test_data.json')
      .then(res => {
        setData(res.data);
        console.log(res.data)
      })
  
      const newFilterData = data.filter((value) => {
        return value.policyID.toLowerCase().includes(
          searchPolicyId.toLowerCase()
        );
      });
  
      if (searchPolicyId === "") {
        setFilteredData([]);
      } else setFilteredData(newFilterData);
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setEnteredData("");
    };
  
    function ClickMe(data) {
  
      let ar = [[-70.64573, 43.09008],
       [-70.75102, 43.08003],
       [-70.79761, 43.21973],
       [-70.98176, 43.36789],
       [-67.13734, 45.13745]];
  
      store.dispatch({type: 'long', long: ar});
    }
  

  return (
      
      <Box
        display=""
        backgroundColor={colors.primary[600]}
        borderRadius="3px"
      >
        <div className="SearchInputs">
          <InputBase 
          sx={{ ml: 2, flex: 1 }} 
          placeholder={placeHolder} 
          value={enteredData}
          onChange={handleFilter}
          />
          <IconButton type="button" sx={{ p: 1 }}>
          {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
            {/* <SearchIcon /> */}
          </IconButton>
        </div>

        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
        
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, k) => {
              return (
                <div className="dataItem" key={k} onClick={() =>ClickMe(value.geometry)}>
                  {value.policyID}
                </div>
              );
            })}
          </div>
        )}
      </Box>
  );
};

export default BarSearch;
