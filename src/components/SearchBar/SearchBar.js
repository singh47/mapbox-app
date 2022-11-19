import React, { useState } from "react";

import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = ({ placeHolder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [enteredData, setEnteredData] = useState([]);

  const handleFilter = (event) => {
    const searchPolicyId = event.target.value;
    setEnteredData(searchPolicyId);
    const newFilterData = data.filter((value) => {
      return value.PolicyID.toLowerCase().includes(
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
                {value.PolicyID}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
