import MainHeader from "./components/MainHeader";
import DisplayEpisodes from "./components/DisplayEpisodes";
import MainFooter from "./components/MainFooter";
import { useEffect, useState } from "react";
import DropDownMenu from "./components/DropDownMenu";
import SearchBar from "./components/SearchBar";
import IEpisode from "./components/IEpisode";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const [filteredEpNum, setFilteredEpNum] = useState(0);
  const [dropDownSelect, setDropDownSelect] = useState("Select an episode");
  const [dropDownActive, setDropDownActive] = useState(false);
  const [episodeData, setEpisodedata] = useState<IEpisode[]>([])

  useEffect(() => {
    const fetchLink = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
      const data = await response.json();
      setEpisodedata(data);
    }
    fetchLink();
  }, []);

  // Buggy function in DropDownMenu.tsx

  return (
    <>
      <div className="header">
        <MainHeader />
        <SearchBar
          searchText={searchText}
          handleSearchText={setSearchText}
          filteredEpNum={filteredEpNum}
          handleDropDownActive={setDropDownActive}
          episodes={episodeData}
        />
      </div>
      <div className="episode-list">
        <DropDownMenu
            dropDownSelect={dropDownSelect}
            handleDropDownSelect={setDropDownSelect}
            handleDropDownActive={setDropDownActive}
            dropDownActive={dropDownActive}
            handleSearchText={setSearchText}
            episodes={episodeData}
        />
        <DisplayEpisodes
          searchText={searchText}
          handleFilteredEpNum={setFilteredEpNum}
          dropDownSelect={dropDownSelect}
          dropDownActive={dropDownActive}
          episodes={episodeData}
        />
      </div>
      <MainFooter />
    </>
  );
}

export default App;
