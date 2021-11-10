import IEpisode from "./IEpisode";
import WriteEpisode from "./WriteEpisode";

function ListElement(props: IEpisode): JSX.Element {
  const [trimmedSummary, summaryWOutTags] = cutDownSummary(props.summary);
  return (
    <section className="episode">
      <img
        src={
          props.image.medium === null
            ? "../images/noImage.jpg"
            : props.image.medium
        }
        alt="Preview for episode"
        className="episode-image"
      />
      <div className="description">
        <h3>{WriteEpisode(props)}</h3>
        <h4>Description</h4>
        <p>{trimmedSummary}{trimmedSummary !== summaryWOutTags && <span className="expand-summary">...</span>}</p>
      </div>
    </section>
  );
}

function cutDownSummary(summary: string): [string, string] {
  const summaryWOutTags = summary.slice(3, -4)
  let cutOffSummary = summaryWOutTags.slice(0, 200)
  if (cutOffSummary.slice(-1) === " ") {
    cutOffSummary = cutOffSummary.slice(0, -1)
  }
  return [cutOffSummary, summaryWOutTags]
}

export default ListElement;
