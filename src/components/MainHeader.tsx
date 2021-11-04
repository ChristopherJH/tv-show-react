import episodes from "./episodes.json";
import IEpisode from "./IEpisode";
import WriteEpisode from "./WriteEpisode";

interface SearchProps {
  searchText: string;
  handleSearchText: (searchInput: string) => void;
  filteredEpNum: number;
  dropDownSelect: string;
  handleDropDownSelect: (selectInput: string) => void;
}

function MainHeader(searchProps: SearchProps): JSX.Element {
  return (
    <header>
      <h1>Game of Thrones</h1>
      <h2>Episode List</h2>
      <SearchBar
        searchText={searchProps.searchText}
        handleSearchText={searchProps.handleSearchText}
        filteredEpNum={searchProps.filteredEpNum}
        dropDownSelect={searchProps.dropDownSelect}
        handleDropDownSelect={searchProps.handleDropDownSelect}
      />
      <DropDownMenu 
        searchText={searchProps.searchText}
        handleSearchText={searchProps.handleSearchText}
        filteredEpNum={searchProps.filteredEpNum}
        dropDownSelect={searchProps.dropDownSelect}
        handleDropDownSelect={searchProps.handleDropDownSelect}
      />
    </header>
  );
}

function EpisodeToOption(episode: IEpisode): JSX.Element {
  return (
    <option value={WriteEpisode(episode)}>{WriteEpisode(episode)}</option>
  );
}

function DropDownMenu(props: SearchProps): JSX.Element {
  return (
    <select 
      value={props.dropDownSelect}
      onChange={(e) => props.handleDropDownSelect(e.target.value)}>
      {episodes.map(EpisodeToOption)}
    </select>
  )
}

function SearchBar(props: SearchProps): JSX.Element {
  return (
    <>
      <input
        type="searchText"
        placeholder="Search"
        value={props.searchText}
        onChange={(e) => props.handleSearchText(e.target.value)}
      />{" "}
      Showing {props.filteredEpNum}/{episodes.length} episodes
    </>
  );
}

export default MainHeader;
