function doubleDigitEpisode(number: number): boolean {
    return number < 10;
  }

interface EpisodeNameProps {
    name: string;
    season: number;
    number: number;
}

export default function WriteEpisode(props: EpisodeNameProps): string {
    const episodeString = `S0${props.season}E${doubleDigitEpisode(props.number) && "0"}${props.number}: ${props.name}`;
    return episodeString;
}