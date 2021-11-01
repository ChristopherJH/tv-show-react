import MainHeader from "./components/MainHeader";
import DisplayEpisodes from "./components/DisplayEpisodes";
import MainFooter from "./components/MainFooter";
import { useState } from "react";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const [filteredEpNum, setFilteredEpNum] = useState(0);
  return (
    <>
      <MainHeader
        searchText={searchText}
        handleSearchText={setSearchText}
        filteredEpNum={filteredEpNum}
      />
      <DisplayEpisodes
        searchText={searchText}
        filteredEpNum={filteredEpNum}
        handleFilteredEpNum={setFilteredEpNum}
      />
      <MainFooter />
    </>
  );
}

export default App;
