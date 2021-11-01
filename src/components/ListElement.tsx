import { IEpisode } from "./IEpisode";

function ListElement(props: IEpisode): JSX.Element {
    return (
        <section className="episode">
            <h2 className="description">S0{props.season}E{doubleDigitEpisode(props.number) && '0'}{props.number}: {props.name}</h2>
            <img src={props.image.medium} alt="Preview for episode"/>
            <div className="description">
                <h3>Description</h3>
                <p>{props.summary.slice(3, -4)}</p> 
            </div>
        </section>
    );
}

function doubleDigitEpisode(number: number): boolean {
    return number < 10
}

export default ListElement;

// export interface IEpisode {
//     id: number;
//     url: string;
//     name: string;
//     season: number;
//     number: number;
//     type: string;
//     airdate: string;
//     airtime: string;
//     airstamp: string;
//     runtime: number;
//     image: {
//       medium: string;
//       original: string;
//     };
//     summary: string;
//     _links: { self: { href: string } };
//   }