import EpisodeCard from "./EpisodeCard";
import IEpisode from "./IEpisode";

interface SearchProps {
  searchText: string;
  handleFilteredEpNum: (input: number) => void;
  filteredSeason: number;
  dropDownActive: boolean;
  episodes: IEpisode[];
}

interface ObjectToEpisodeProps {
  episode: IEpisode;
}

function ObjectToEpisode(props: ObjectToEpisodeProps): JSX.Element {
  return <EpisodeCard episode={props.episode} />;
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
    if (props.filteredSeason !== 0) {
      const filteredEpisodes = props.episodes.filter(
        (episode) => props.filteredSeason === episode.season
      );
      return filteredEpisodes;
    }
    return props.episodes;
  }
  console.log("Episodes (inside DisplayEpisodes):", props.episodes);
  const filteredEpisodes = filterEpisodes();
  props.handleFilteredEpNum(filteredEpisodes.length);

  return (
    <main>
      {filteredEpisodes.map((episode) => (
        <ObjectToEpisode key={episode.id} episode={episode} />
      ))}
    </main>
  );
}

export default DisplayEpisodes;
