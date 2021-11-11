import IEpisode from "./IEpisode";
import React from "react";

interface DropDownProps {
  filteredSeason: number;
  setFilteredSeason: (selectInput: number) => void;
  handleDropDownActive: (input: boolean) => void;
  dropDownActive: boolean;
  handleSearchText: (selectInput: string) => void;
  episodes: IEpisode[];
}

export default function SeasonDropDown(props: DropDownProps): JSX.Element {
  function setOption(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setFilteredSeason(Number(e.target.value));
    props.handleDropDownActive(true);
  }
  return (
    <div className="dropdown">
      <select value={props.filteredSeason} onChange={(e) => setOption(e)}>
        {props.episodes.length !== 0 && (
          <SeasonToOption episodes={props.episodes} />
        )}
      </select>
      {props.dropDownActive && (
        <ResetDropDown
          setFilteredSeason={props.setFilteredSeason}
          handleDropDownActive={props.handleDropDownActive}
          handleSearchText={props.handleSearchText}
        />
      )}
    </div>
  );
}

interface SeasonToOptionProps {
  episodes: IEpisode[];
}

function SeasonToOption(props: SeasonToOptionProps): JSX.Element {
  const lastSeasonNum = props.episodes[props.episodes.length - 1].season;
  const optionsArray = [];
  for (let i = 1; i < lastSeasonNum + 1; i++) {
    const seasonStr = "Season" + i.toString();
    optionsArray.push(
      <option className="options" key={seasonStr} value={i}>
        Season {i}
      </option>
    );
  }
  return <>{optionsArray}</>;
}

interface ResetDropDownProps {
  setFilteredSeason: (selectInput: number) => void;
  handleDropDownActive: (input: boolean) => void;
  handleSearchText: (selectInput: string) => void;
}

function ResetDropDown(props: ResetDropDownProps): JSX.Element {
  function resetOption() {
    props.handleDropDownActive(false);
    props.setFilteredSeason(0);
    props.handleSearchText("");
  }
  return <button onClick={resetOption}>Reset</button>;
}
