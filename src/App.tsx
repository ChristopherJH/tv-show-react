import MainHeader from "./components/MainHeader";
import DisplayEpisodes from "./components/DisplayEpisodes";
import MainFooter from "./components/MainFooter";
import { useState } from "react";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const [filteredEpNum, setFilteredEpNum] = useState(0);
  const [dropDownSelect, setDropDownSelect] = useState("Select an episode");
  const [dropDownActive, setDropDownActive] = useState(false);
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
        dropDownSelect={dropDownSelect}
        dropDownActive={true}
      />
      <MainFooter />
    </>
  );
}

export default App;
