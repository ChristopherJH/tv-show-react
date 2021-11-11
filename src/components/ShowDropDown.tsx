interface ShowDropDownProps {
  setShowLink: (input: string) => void;
  setFilteredSeason: (input: number) => void;
  setDropDownActive: (input: boolean) => void;
}

export default function ShowDropDown(props: ShowDropDownProps): JSX.Element {
  function handleShowChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setDropDownActive(false);
    props.setShowLink(e.target.value);
    props.setFilteredSeason(0);
  }

  return (
    <div className="dropdown">
      <select onChange={(e) => handleShowChange(e)}>
        <option value="https://api.tvmaze.com/shows/82/episodes">
          Game of Thrones
        </option>
        <option value="https://api.tvmaze.com/shows/81/episodes">
          Criminal Minds
        </option>
      </select>
    </div>
  );
}
