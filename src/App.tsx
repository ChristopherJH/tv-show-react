import MainHeader from "./components/MainHeader";
import DisplayEpisodes from "./components/DisplayEpisodes";
import MainFooter from "./components/MainFooter";
import { useState } from "react";
import DropDownMenu from "./components/DropDownMenu";
import SearchBar from "./components/SearchBar";
import IEpisode from "./components/IEpisode";

function App(): JSX.Element {
  let episodeData: IEpisode[];

  async function loadData(apiLink: string) {
    const response = await fetch(apiLink);
    episodeData = await response.json();
  }
  
  loadData('https://api.tvmaze.com/shows/82/episodes');
  console.log({episodeData});
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
        episodes={episodeData}
      />
      <DropDownMenu
        dropDownSelect={dropDownSelect}
        handleDropDownSelect={setDropDownSelect}
        dropDownActive={dropDownActive}
        handleDropDownActive={setDropDownActive}
        handleSearchText={setSearchText}
        episodes={episodeData}
      />
      <DisplayEpisodes
        searchText={searchText}
        filteredEpNum={filteredEpNum}
        handleFilteredEpNum={setFilteredEpNum}
        dropDownSelect={dropDownSelect}
        dropDownActive={dropDownActive}
        episodes={episodeData}
      />
      <MainFooter />
    </>
  );
}

export default App;
