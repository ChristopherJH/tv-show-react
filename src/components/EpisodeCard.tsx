import IEpisode from "./IEpisode";
import WriteEpisode from "./WriteEpisode";

interface EpisodeCardProps {
  episode: IEpisode;
}

function EpisodeCard(props: EpisodeCardProps): JSX.Element {
  return (
    <section className="episode">
      <img
        src={
          props.episode.image === null
            ? "../images/noImage.jpg"
            : props.episode.image.original
        }
        alt="Preview for episode"
        className="episode-image"
      />
      <div className="description">
        <h3>{cutDownText(WriteEpisode(props.episode), 60, false)}</h3>
        <div className="desc-airdate">
          {props.episode.rating.average !== null ? (
            <h4>⭐ {props.episode.rating.average}</h4>
          ) : (
            <h4>No rating available</h4>
          )}
          <h4>{props.episode.airdate}</h4>
        </div>
        {props.episode.summary !== null ? (
          <p>{cutDownText(props.episode.summary, 200, true)}</p>
        ) : (
          <p>No description available.</p>
        )}
      </div>
    </section>
  );
}

function cutDownText(text: string, limit: number, tags: boolean): string {
  if (tags) {
    text = text.slice(3, -4);
  }
  let cutOffText = text.slice(0, limit);
  if (cutOffText.slice(-1) === " ") {
    cutOffText = cutOffText.slice(0, -1);
  }
  if (cutOffText !== text) {
    return cutOffText + "...";
  } else {
    return cutOffText;
  }
}

export default EpisodeCard;
