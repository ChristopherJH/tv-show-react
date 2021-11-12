function doubleDigitNumber(number: number): boolean {
  return number < 10;
}

interface EpisodeNameProps {
  name: string;
  season: number;
  number: number;
}

function WriteEpisode(props: EpisodeNameProps): string {
  const episodeString = `S${doubleDigitNumber(props.season) ? "0" : ""}${
    props.season
  }E${doubleDigitNumber(props.number) ? "0" : ""}${props.number}: ${
    props.name
  }`;
  return episodeString;
}

export default WriteEpisode;
