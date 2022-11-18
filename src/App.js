import SearchBar from "./components/SearchBar/SearchBar";
import "./index.css";
import CortevaData from "./components/SearchBar/Data";

const App = () => {
  return (
    <div className="App">
      <SearchBar placeHolder="Enter your Policy ID..." data={CortevaData} />
    </div>
  );
};
export default App;

