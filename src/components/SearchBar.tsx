import episodes from "./episodes.json";

interface SearchBarProps {
  searchText: string;
  handleSearchText: (searchInput: string) => void;
  filteredEpNum: number;
  handleDropDownActive: (input: boolean) => void;
}

function SearchBar(props: SearchBarProps): JSX.Element {
  function startSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    props.handleSearchText(e.target.value);
    props.handleDropDownActive(false);
  }

  return (
    <>
      <input
        type="searchText"
        placeholder="Search"
        value={props.searchText}
        onChange={(e) => startSearchInput(e)}
      />{" "}
      Showing {props.filteredEpNum}/{episodes.length} episodes
    </>
  );
}

export default SearchBar;