import episodes from '/home/2110-014-cha/Developer/academy/training/tv-show-react/src/episodes.json';

function MainHeader(): JSX.Element {
    return (
        <header>
            <h1>Game of Thrones</h1>
            <h2>Episode List</h2>
            <SearchBar />
        </header>
    );
}

function SearchBar(): JSX.Element {
    return (
        <>
            <input type="text" placeholder="Search"></input>
            <p>Showing {episodes.length} out of {episodes.length} episodes.</p>
        </>
    );
}

export default MainHeader;