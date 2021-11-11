import IEpisode from "./IEpisode";
import WriteEpisode from "./WriteEpisode";

interface EpisodeCardProps {
  episode: IEpisode;
}

function EpisodeCard(props: EpisodeCardProps): JSX.Element {
  const [trimmedSummary, summaryWOutTags] = cutDownSummary(
    props.episode.summary
  );
  return (
    <section className="episode">
      <img
        src={
          props.episode.image.medium === null
            ? "../images/noImage.jpg"
            : props.episode.image.original
        }
        alt="Preview for episode"
        className="episode-image"
      />
      <div className="description">
        <h3>{WriteEpisode(props.episode)}</h3>
        <div className="desc-airdate">
          <h4>⭐ {props.episode.rating.average}</h4>
          <h4>{props.episode.airdate}</h4>
        </div>
        <p>
          {trimmedSummary}
          {trimmedSummary !== summaryWOutTags && (
            <span className="expand-summary">...</span>
          )}
        </p>
      </div>
    </section>
  );
}

function cutDownSummary(summary: string): [string, string] {
  const summaryWOutTags = summary.slice(3, -4);
  let cutOffSummary = summaryWOutTags.slice(0, 200);
  if (cutOffSummary.slice(-1) === " ") {
    cutOffSummary = cutOffSummary.slice(0, -1);
  }
  return [cutOffSummary, summaryWOutTags];
}

export default EpisodeCard;
