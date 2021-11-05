import IEpisode from "./IEpisode";
import WriteEpisode from "./WriteEpisode";

function ListElement(props: IEpisode): JSX.Element {
  return (
    <section className="episode">
      <h2 className="description">{WriteEpisode(props)}</h2>
      {/* The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.  */}
      <img
        src={
          props.image.medium === null
            ? "../images/noImage.jpg"
            : props.image.medium
        }
        alt="Preview for episode"
      />
      <div className="description">
        <h3>Description</h3>
        <p>{props.summary.slice(3, -4)}</p>
      </div>
    </section>
  );
}

export default ListElement;
