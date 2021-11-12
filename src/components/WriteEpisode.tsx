import { isSingleDigitNumber } from "../utils/isSingleDigitNumber";

interface EpisodeNameProps {
  name: string;
  season: number;
  number: number;
}

function WriteEpisode(props: EpisodeNameProps): string {
  const episodeString = `S${isSingleDigitNumber(props.season) ? "0" : ""}${
    props.season
  }E${isSingleDigitNumber(props.number) ? "0" : ""}${props.number}: ${
    props.name
  }`;
  return episodeString;
}

export default WriteEpisode;
