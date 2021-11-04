import episodes from "./episodes.json";
import IEpisode from "./IEpisode";
import WriteEpisode from "./WriteEpisode";

interface SearchBarProps {
  searchText: string;
  handleSearchText: (searchInput: string) => void;
  filteredEpNum: number;
}

interface DropDownProps {
  dropDownSelect: string;
  handleDropDownSelect: (selectInput: string) => void;
}

function MainHeader(searchProps: SearchBarProps, dropProps: DropDownProps): JSX.Element {
  return (
    <header>
      <h1>Game of Thrones</h1>
      <h2>Episode List</h2>
      <SearchBar
        searchText={searchProps.searchText}
        handleSearchText={searchProps.handleSearchText}
        filteredEpNum={searchProps.filteredEpNum}
      />
      <DropDownMenu 
        dropDownSelect={""}
        handleDropDownSelect={dropProps.handleDropDownSelect}
      />
    </header>
  );
}

function EpisodeToOption(episode: IEpisode): JSX.Element {
  return (
    <option value={WriteEpisode(episode)}></option>
  );
}

function DropDownMenu(props: DropDownProps): JSX.Element {
  return (
    <select 
      value={props.dropDownSelect}
      onChange={(e) => props.handleDropDownSelect(e.target.value)}>
      {episodes.map(EpisodeToOption)}
    </select>
  )
}

function SearchBar(props: SearchBarProps): JSX.Element {
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
