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
  const showList: ShowProps[] = tvShows;
  const [searchText, setSearchText] = useState("");
  const [filteredEpNum, setFilteredEpNum] = useState(0);
  const [filteredSeason, setFilteredSeason] = useState(0);
  const [dropDownActive, setDropDownActive] = useState(false);
  const [episodeData, setEpisodeData] = useState<IEpisode[]>([]);
  const [showID, setShowID] = useState<string>(showList[0].id.toString());

  useEffect(() => {
    const fetchLink = async () => {
      const showLink = "https://api.tvmaze.com/shows/" + showID + "/episodes";
      const response = await fetch(showLink);
      const data = await response.json();
      setEpisodeData(data);
    };
    fetchLink();
  }, [showID]);

  return (
    <>
      <div className="header">
        <div className="title-and-search">
          <h1>TV shows</h1>
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
        <div className="dropdowns">
          <ShowDropDown
            showID={showID}
            setShowID={setShowID}
            setFilteredSeason={setFilteredSeason}
            setDropDownActive={setDropDownActive}
            tvShows={showList}
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
      </div>
      <div className="episode-list">
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
