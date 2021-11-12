import ShowProps from "./ShowProps";

interface ShowDropDownProps {
  showID: string;
  setShowID: (input: string) => void;
  setFilteredSeason: (input: number) => void;
  setDropDownActive: (input: boolean) => void;
  tvShows: ShowProps[];
}

export default function ShowDropDown(props: ShowDropDownProps): JSX.Element {
  function handleShowChange(id: string) {
    props.setDropDownActive(false);
    props.setShowID(id);
    props.setFilteredSeason(0);
  }

  return (
    <div className="dropdown">
      <select
        value={props.showID}
        onChange={(e) => handleShowChange(e.target.value)}
      >
        {props.tvShows.map((show) => {
          return <ShowToOption key={show.id} tvShow={show} />;
        })}
      </select>
    </div>
  );
}

interface ShowToOptionProps {
  tvShow: ShowProps;
}

function ShowToOption(props: ShowToOptionProps): JSX.Element {
  return (
    <option className="options" value={props.tvShow.id.toString()}>
      {props.tvShow.name}
    </option>
  );
}
