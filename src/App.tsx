import MainHeader from "./components/MainHeader";
import DisplayEpisodes from "./components/DisplayEpisodes";
import MainFooter from "./components/MainFooter";
import { useState } from "react";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const [filteredEpNum, setFilteredEpNum] = useState(0);
  const [dropDownSelect, setDropDownSelect] = useState("");
  return (
    <>
      <MainHeader
        searchText={searchText}
        handleSearchText={setSearchText}
        filteredEpNum={filteredEpNum}
        dropDownSelect={dropDownSelect}
        handleDropDownSelect={setDropDownSelect}
      />
      <DisplayEpisodes
        searchText={searchText}
        filteredEpNum={filteredEpNum}
        handleFilteredEpNum={setFilteredEpNum}
      />
      <MainFooter />
    </>
  );
}

export default App;
