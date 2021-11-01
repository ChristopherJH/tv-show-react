import MainHeader from "./components/MainHeader";
import DisplayEpisodes from "./components/DisplayEpisodes";
import MainFooter from "./components/MainFooter";
import { useState } from "react";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <MainHeader searchText={searchText} handleSearchText={setSearchText}/>
      {/* <h1>{searchText}</h1> */}
      <DisplayEpisodes searchText={searchText}/>
      <MainFooter />
    </>
  );
}

export default App;
