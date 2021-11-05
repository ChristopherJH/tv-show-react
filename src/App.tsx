import MainHeader from "./components/MainHeader";
import DisplayEpisodes from "./components/DisplayEpisodes";
import MainFooter from "./components/MainFooter";
import { useState } from "react";
import DropDownMenu from "./components/DropDownMenu";
import SearchBar from "./components/SearchBar";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const [filteredEpNum, setFilteredEpNum] = useState(0);
  const [dropDownSelect, setDropDownSelect] = useState("Select an episode");
  const [dropDownActive, setDropDownActive] = useState(false);
  return (
    <>
      <MainHeader />
      <SearchBar
        searchText={searchText}
        handleSearchText={setSearchText}
        filteredEpNum={filteredEpNum}
        handleDropDownActive={setDropDownActive}
      />
      <DropDownMenu
        dropDownSelect={dropDownSelect}
        handleDropDownSelect={setDropDownSelect}
        dropDownActive={dropDownActive}
        handleDropDownActive={setDropDownActive}
        handleSearchText={setSearchText}
      />
      <DisplayEpisodes
        searchText={searchText}
        filteredEpNum={filteredEpNum}
        handleFilteredEpNum={setFilteredEpNum}
        dropDownSelect={dropDownSelect}
        dropDownActive={dropDownActive}
      />
      <MainFooter />
    </>
  );
}

export default App;
