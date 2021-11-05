import WriteEpisode from "./WriteEpisode";
import IEpisode from "./IEpisode";
import React from "react";

interface DropDownProps {
  dropDownSelect: string;
  handleDropDownSelect: (selectInput: string) => void;
  dropDownActive: boolean;
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
        dropDownActive={props.dropDownActive}
        handleDropDownActive={props.handleDropDownActive}
        handleSearchText={props.handleSearchText}
        episodes={props.episodes}
      />
    </div>
  );
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
