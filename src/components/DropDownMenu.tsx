import WriteEpisode from "./WriteEpisode";
import IEpisode from "./IEpisode";
import React from "react";

interface DropDownProps {
  dropDownSelect: string;
  handleDropDownSelect: (selectInput: string) => void;
  handleDropDownActive: (input: boolean) => void;
  handleSearchText: (selectInput: string) => void;
  episodes: IEpisode[];
}

export default function DropDownMenu(props: DropDownProps): JSX.Element {
  function setOption(e: React.ChangeEvent<HTMLSelectElement>) {
    props.handleDropDownSelect(e.target.value);
    props.handleDropDownActive(true);
  }

  return (
    <div className="dropdown">
      <select value={props.dropDownSelect} onChange={(e) => setOption(e)}>
        {props.episodes.map(EpisodeToOption)}
      </select>
      <ResetDropDown
        dropDownSelect={props.dropDownSelect}
        handleDropDownSelect={props.handleDropDownSelect}
        handleDropDownActive={props.handleDropDownActive}
        handleSearchText={props.handleSearchText}
        episodes={props.episodes}
      />
    </div>
  );
}

interface SeasonProps {
  season: number;
  episodes: IEpisode[];
}

// function FilterBySeason(props: SeasonProps): JSX.Element {

// }

function SeasonToOption(episodes: IEpisode[]){
  const lastSeasonNum = episodes[-1].season;
  const optionsArray = []
  for (let i=1; i<lastSeasonNum+1; i++) {
    const seasonStr = 'Season'+i.toString()
    optionsArray.push(<option value={seasonStr}>Season {i}</option>)
  }
  return optionsArray;
}

function EpisodeToOption(episode: IEpisode): JSX.Element {
  return <option value={WriteEpisode(episode)}>{WriteEpisode(episode)}</option>;
}

function ResetDropDown(props: DropDownProps): JSX.Element {
  function resetOption() {
    props.handleDropDownActive(false);
    props.handleDropDownSelect("");
    props.handleSearchText("");
  }
  return <button onClick={resetOption}>Reset</button>;
}
