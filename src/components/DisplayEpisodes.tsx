import ListElement from "./ListElement";
import IEpisode from "./IEpisode";
import episodes from "./episodes.json";

interface SearchProps {
  searchText: string;
  filteredEpNum: number;
  handleFilteredEpNum: (input: number) => void;
  dropDownSelect: string;
  dropDownActive: boolean;
}

function ObjectToEpisode(episodes: IEpisode): JSX.Element {
  return (
    <ListElement
      id={episodes.id}
      url={episodes.url}
      name={episodes.name}
      season={episodes.season}
      number={episodes.number}
      type={episodes.type}
      airdate={episodes.airdate}
      airtime={episodes.airtime}
      airstamp={episodes.airstamp}
      runtime={episodes.runtime}
      image={episodes.image}
      summary={episodes.summary}
      _links={episodes._links}
    />
  );
}

function DisplayEpisodes(props: SearchProps): JSX.Element {
  function filterEpisodes(): IEpisode[] {
    if (props.dropDownActive) {
      return filterByDropDown();
    } else {
      return filterBySearchBar();
    }
  }

  function filterBySearchBar(): IEpisode[] {
    const filteredEpisodes = episodes.filter(
      (episode) =>
        episode.name.toLowerCase().includes(props.searchText.toLowerCase()) ||
        episode.summary.toLowerCase().includes(props.searchText.toLowerCase())
    );
    return filteredEpisodes;
  }

  function filterByDropDown(): IEpisode[] {
    const filteredEpisodes = episodes.filter((episode) =>
      props.dropDownSelect.includes(episode.name)
    );
    return filteredEpisodes;
  }

  const filteredEpisodes = filterEpisodes();
  props.handleFilteredEpNum(filteredEpisodes.length);

  return (
    <main>
      {/* <h1>{props.searchText}</h1> */}
      {filteredEpisodes.map(ObjectToEpisode)}
    </main>
  );
}

export default DisplayEpisodes;
