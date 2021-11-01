import episodes from "/home/2110-014-cha/Developer/academy/training/tv-show-react/src/episodes.json";

interface SearchBarProps {
  searchText: string;
  handleSearchText: (searchInput: string) => void;
}

function MainHeader(props: SearchBarProps): JSX.Element {

  return (
    <header>
      <h1>Game of Thrones</h1>
      <h2>Episode List</h2> 
      <SearchBar searchText={props.searchText} handleSearchText={props.handleSearchText}/>
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
      />
      <p>
        Showing {episodes.length} out of {episodes.length} episodes.
      </p>
    </>
  );
}

export default MainHeader;
