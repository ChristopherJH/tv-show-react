import episodes from "/home/2110-014-cha/Developer/academy/training/tv-show-react/src/episodes.json";

interface SearchBarProps {
  searchText: string;
  handleSearchText: (searchInput: string) => void;
  filteredEpNum: number;
}

function MainHeader(props: SearchBarProps): JSX.Element {

  return (
    <header>
      <h1>Game of Thrones</h1>
      <h2>Episode List</h2> 
      <SearchBar searchText={props.searchText} handleSearchText={props.handleSearchText} filteredEpNum={props.filteredEpNum}/>
      <p>{props.searchText}</p>
    </header>
  );
}

function SearchBar(props: SearchBarProps): JSX.Element {
  return (
    <>
      <input 
        type="searchText" 
        placeholder="Search" 
        value={props.searchText} 
        onChange={(e) => props.handleSearchText(e.target.value)}
      /> Showing {props.filteredEpNum}/{episodes.length} episodes
    </>
  );
}

export default MainHeader;
