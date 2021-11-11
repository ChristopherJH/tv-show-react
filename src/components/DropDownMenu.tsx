import IEpisode from "./IEpisode";
import React from "react";

interface DropDownProps {
  dropDownSelect: string;
  handleDropDownSelect: (selectInput: string) => void;
  handleDropDownActive: (input: boolean) => void;
  dropDownActive: boolean;
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
        <SeasonToOption episodes={props.episodes}/>
      </select>
      {props.dropDownActive &&
        <ResetDropDown
          dropDownSelect={props.dropDownSelect}
          handleDropDownSelect={props.handleDropDownSelect}
          handleDropDownActive={props.handleDropDownActive}
          dropDownActive={props.dropDownActive}
          handleSearchText={props.handleSearchText}
          episodes={props.episodes}
        />
      }
    </div>
  );
}

interface SeasonProps {
  episodes: IEpisode[];
}

// Buggy function
function SeasonToOption(props: SeasonProps): JSX.Element {
  //const lastSeasonNum = props.episodes[props.episodes.length-1].season;
  console.log(props.episodes)
  console.log(props.episodes.length-1)
  console.log(props.episodes[props.episodes.length-1])
  console.log(props.episodes[props.episodes.length-1].season)
  const optionsArray = []
  for (let i=1; i<10+1; i++) {
    const seasonStr = 'Season'+i.toString()
    optionsArray.push(<option value={seasonStr}>Season {i}</option>)
  }
  return (
    <div className="options">
      {optionsArray}
    </div>
  );
}

// function EpisodeToOption(episode: IEpisode): JSX.Element {
//   return <option value={WriteEpisode(episode)}>{WriteEpisode(episode)}</option>;
// }

function ResetDropDown(props: DropDownProps): JSX.Element {
  function resetOption() {
    props.handleDropDownActive(false);
    props.handleDropDownSelect("");
    props.handleSearchText("");
  }
  return <button onClick={resetOption}>Reset</button>;
}
