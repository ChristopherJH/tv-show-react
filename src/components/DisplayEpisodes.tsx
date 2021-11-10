import ListElement from "./ListElement";
import IEpisode from "./IEpisode";

interface SearchProps {
  searchText: string;
  handleFilteredEpNum: (input: number) => void;
  dropDownSelect: string;
  dropDownActive: boolean;
  episodes: IEpisode[];
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
    const filteredEpisodes = props.episodes.filter(
      (episode) =>
        episode.name.toLowerCase().includes(props.searchText.toLowerCase()) ||
        episode.summary.toLowerCase().includes(props.searchText.toLowerCase())
    );
    return filteredEpisodes;
  }

  function filterByDropDown(): IEpisode[] {
    const filteredEpisodes = props.episodes.filter((episode) =>
      props.dropDownSelect.includes(episode.name)
    );
    return filteredEpisodes;
  }

  const filteredEpisodes = filterEpisodes();
  props.handleFilteredEpNum(filteredEpisodes.length);

  return (
    <main>
      {filteredEpisodes.map(ObjectToEpisode)}
    </main>
  );
}

export default DisplayEpisodes;
