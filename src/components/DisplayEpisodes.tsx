import ListElement from "./ListElement";
import { IEpisode } from "./IEpisode";
import episodes from "/home/2110-014-cha/Developer/academy/training/tv-show-react/src/episodes.json";

interface SearchBarProps {
  searchText: string;
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

function DisplayEpisodes(props: SearchBarProps): JSX.Element {
  return <main>
    <h1>{props.searchText}</h1>
    {episodes.map(ObjectToEpisode)}</main>;
}

export default DisplayEpisodes;