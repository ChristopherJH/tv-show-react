import MainHeader from "./components/MainHeader";
import DisplayEpisodes from "./components/DisplayEpisodes";
import MainFooter from "./components/MainFooter";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import IEpisode from "./components/IEpisode";
import SeasonDropDown from "./components/SeasonDropDown";
import ShowDropDown from "./components/ShowDropDown";
import tvShows from "./shows.json";
import ShowProps from "./components/ShowProps";

function App(): JSX.Element {
  //const [showList, setShowList] = useState<ShowProps[]>(tvShows);
  const [searchText, setSearchText] = useState("");
  const [filteredEpNum, setFilteredEpNum] = useState(0);
  const [filteredSeason, setFilteredSeason] = useState(0);
  const [dropDownActive, setDropDownActive] = useState(false);
  const [episodeData, setEpisodeData] = useState<IEpisode[]>([]);
  const [showLink, setShowLink] = useState<string>(
    "https://api.tvmaze.com/shows/82/episodes"
  );

  useEffect(() => {
    const fetchLink = async () => {
      const response = await fetch(showLink);
      const data = await response.json();
      setEpisodeData(data);
    };
    fetchLink();
  }, [showLink]);

  return (
    <>
      <div className="header">
        <MainHeader />
        <div className="search-and-show">
          <SearchBar
            searchText={searchText}
            handleSearchText={setSearchText}
            filteredEpNum={filteredEpNum}
            handleDropDownActive={setDropDownActive}
            episodes={episodeData}
          />
        </div>
      </div>
      <div className="episode-list">
        <div className="dropdowns">
          <ShowDropDown
            setShowLink={setShowLink}
            setFilteredSeason={setFilteredSeason}
            setDropDownActive={setDropDownActive}
          />
          <SeasonDropDown
            filteredSeason={filteredSeason}
            setFilteredSeason={setFilteredSeason}
            handleDropDownActive={setDropDownActive}
            dropDownActive={dropDownActive}
            handleSearchText={setSearchText}
            episodes={episodeData}
          />
        </div>
        <DisplayEpisodes
          searchText={searchText}
          handleFilteredEpNum={setFilteredEpNum}
          filteredSeason={filteredSeason}
          dropDownActive={dropDownActive}
          episodes={episodeData}
        />
      </div>
      <MainFooter />
    </>
  );
}

export default App;
