import React, { useState } from "react";

import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios';


const SearchBar = ({ placeHolder, data2 }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [enteredData, setEnteredData] = useState([]);
  const [data, setData] = useState([]);

  const handleFilter = (event) => {
    const searchPolicyId = event.target.value;
    setEnteredData(searchPolicyId);

    //loaded data from API

    axios.get('https://gist.githubusercontent.com/enukeWebDev/31caa8e9213a56d3c353d23ba9a71fd0/raw/clean_data.json')
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
    console.log(data);
  }

  
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeHolder}
          value={enteredData}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, k) => {
            return (
              <div className="dataItem" key={k} onClick={() => ClickMe(value.Acreage)}>
                {value.policyID}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
